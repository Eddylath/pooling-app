import { Injectable } from '@angular/core';
import { Ride } from './app.types';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  	employeeId: string | null = null;

  	availableRides: Ride[] = [{
		id: 1,
		empId: '123456',
    	vehicleType: 'Truck',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 3,
    	rideTime: '18:05',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
    	alreadyBookedBy: ['654321', '789012']
  	}, {
		id: 2,
		empId: '123455',
    	vehicleType: 'Bike',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 1,
    	rideTime: '19:00',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
		alreadyBookedBy: []
	}, {
		id: 3,
		empId: '123454',
    	vehicleType: 'Truck',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 3,
    	rideTime: '18:00',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
		alreadyBookedBy: ['654321', '789012']
	}, {
		id: 4,
		empId: '123453',
    	vehicleType: 'Truck',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 3,
    	rideTime: '20:00',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
		alreadyBookedBy: ['654321', '789012']
	}, {
		id: 5,
		empId: '123452',
    	vehicleType: 'Truck',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 3,
    	rideTime: '12:00',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
		alreadyBookedBy: ['654321', '789012']
	}, {
		id: 6,
		empId: '123451',
    	vehicleType: 'Truck',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 3,
    	rideTime: '10:00',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
		alreadyBookedBy: ['654321', '789012']
	}, {
		id: 7,
		empId: '123450',
    	vehicleType: 'Truck',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 3,
    	rideTime: '18:00',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
		alreadyBookedBy: ['654321', '789012']
	}, {
		id: 8,
		empId: '123466',
    	vehicleType: 'Truck',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 3,
    	rideTime: '01:00',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
		alreadyBookedBy: ['654321', '789012']
	}, {
		id: 9,
		empId: '123446',
    	vehicleType: 'Truck',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 3,
    	rideTime: '15:00',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
		alreadyBookedBy: ['654321', '789012']
	}, {
		id: 10,
		empId: '123456',
    	vehicleType: 'Truck',
    	vehicleNumber: 'MH-01-GH-5262',
    	seatsAvailable: 3,
    	rideTime: '16:00',
    	pickupLocation: 'Office',
    	dropLocation: 'Bellandur',
		alreadyBookedBy: ['654321', '789012']
	}];
}
