import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { isDropPickupSame, isMoreThanCurrentTime, isValidEmpId } from '../add-ride/add-ride.validators';
import { AppService } from '../../app.service';
import { Ride } from '../../app.types';

@Component({
  selector: 'app-book-ride',
  imports: [
	CommonModule,
	ReactiveFormsModule,
	FormsModule
  ],
  templateUrl: './book-ride.component.html',
  styleUrl: './book-ride.component.css'
})
export class BookRideComponent {
	bookRideForm!: FormGroup;
	selectedRide: number = 0;
	formOpen: boolean = true;
	showTable: boolean = false;
	ridesToShow: Ride[] = [];

	constructor(
		private fb: FormBuilder,
		private service: AppService
	) {
		this.initiateForm();
	}

	ngOnint() {

	}

	initiateForm() {
		this.bookRideForm = this.fb.group({
			empId: ['', Validators.required],
			rideTime: [''],
			pickupLocation: [''],
			dropLocation: ['']
		}, {
			validator: [
				isValidEmpId('empId'),
				isMoreThanCurrentTime('rideTime'),
				isDropPickupSame('pickupLocation', 'dropLocation')
			]
		})
	}

	isSearchDisabled() {
		return this.bookRideForm.invalid;
	}

	isFieldInvalid(control: string) {
		return this.bookRideForm.get(control)?.touched && this.bookRideForm.get(control)?.errors;
	}

	addMore() {
		this.formOpen = true;
		this.showTable = false;
		
		//reset removes the 2 of the initial values
		this.initiateForm();
	}

	onSearch() {
		this.ridesToShow = this.service.availableRides.filter((ride: Ride) => {
			//if all seats are already booked
			if (ride.seatsAvailable === ride.alreadyBookedBy.length) {
				return false;
			}
			
			//if host or already booked employee tries to book
			if (ride.empId === this.bookRideForm.value.empId || ride.alreadyBookedBy.includes(this.bookRideForm.value.empId)) {
				return false;
			}

			if (this.bookRideForm.value.pickupLocation && ride.pickupLocation !== this.bookRideForm.value.pickupLocation) {
				return false;
			}

			if (this.bookRideForm.value.dropLocation && ride.dropLocation !== this.bookRideForm.value.dropLocation) {
				return false;
			}

			if (!this.bookRideForm.value.rideTime) {
				return true;
			}

			const rideTime = ride.rideTime.split(':');
			const rideHour = Number(rideTime[0]);
			const rideMinute = Number(rideTime[1]);

			const formTime = this.bookRideForm.value.rideTime.split(':');
			const formHour = Number(formTime[0]);
			const formMinute = Number(formTime[1]);

			if (rideHour - formHour > 1 || formHour - rideHour > 1) {
				return false;
			}

			if (rideHour - formHour === 1) {
				if (rideMinute - formMinute > 0) {
					return false;
				}
			}

			if (rideHour - formHour === -1) {
				if (rideMinute - formMinute < 0) {
					return false;
				}
			}

			return true;
		});
		this.showTable = true;
	}

	onSubmit() {
		this.formOpen = false;
		
		this.service.availableRides[this.selectedRide-1].alreadyBookedBy.push(this.bookRideForm.value.empId);
	}
}
