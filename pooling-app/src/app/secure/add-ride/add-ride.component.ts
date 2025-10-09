import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { 
	isDropPickupSame,
	isMoreThanCurrentTime,
	isValidEmpId,
	isVehicleNumberValid
} from './add-ride.validators';
import { CommonModule } from '@angular/common';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-add-ride',
  imports: [
	ReactiveFormsModule,
	CommonModule
],
  templateUrl: './add-ride.component.html',
  styleUrl: './add-ride.component.css'
})
export class AddRideComponent {
  	addRideForm!: FormGroup;

	formOpen: boolean = true;

	vehicleTypes = ['Car', 'Bike', 'Scooter', 'Bus', 'Truck'];

	constructor(
		private fb: FormBuilder,
		private service: AppService
	) {
		this.initiateForm();
	}

	initiateForm() {
		this.addRideForm = this.fb.group({
			empId: ['', [Validators.required]],
			vehicleType: [this.vehicleTypes[0]],
			vehicleNumber: ['', Validators.required],
			seatsAvailable: [1, [Validators.required, Validators.min(1)]],
			rideTime: ['', Validators.required],
			pickupLocation: ['', Validators.required],
			dropLocation: ['', Validators.required],
		}, {
			validator: [
				isValidEmpId('empId'),
				isVehicleNumberValid('vehicleNumber'),
				isMoreThanCurrentTime('rideTime'),
				isDropPickupSame('pickupLocation', 'dropLocation')
			]
		});
	}

	isSubmitDisabled() {
		return this.addRideForm.invalid;
	}

	isFieldInvalid(control: string) {
		return this.addRideForm.get(control)?.touched && this.addRideForm.get(control)?.errors;
	}

	onSubmit() {
		this.formOpen = false;
		const value = this.addRideForm.value;

		this.service.availableRides.push({
			id: this.service.availableRides.length + 1,
			empId: value.empId,
    		vehicleType: value.vehicleType,
    		vehicleNumber: value.vehicleNumber,
    		seatsAvailable: value.seatsAvailable,
    		rideTime: value.rideTime,
    		pickupLocation: value.pickupLocation,
    		dropLocation: value.dropLocation,
    		alreadyBookedBy: []
		})
	}

	addMore() {
		this.formOpen = true;
		
		//reset removes the 2 of the initial values
		this.initiateForm();
	}
}
