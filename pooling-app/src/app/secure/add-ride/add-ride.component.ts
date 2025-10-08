import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { 
	isDropPickupSame,
	isMoreThanCurrentTime,
	isValidEmpId,
	isVehicleNumberValid
} from './add-ride.validators';
import { CommonModule } from '@angular/common';

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
  	addRideForm: FormGroup;

	vehicleTypes = ['Car', 'Bike', 'Scooter', 'Bicycle', 'Bus', 'Truck'];

	constructor(private fb: FormBuilder) {
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
}
