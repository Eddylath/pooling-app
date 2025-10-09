export type Ride = {
    id: number;
    empId: string;
    vehicleType: string;
    vehicleNumber: string;
    seatsAvailable: number;
    rideTime: string;
    pickupLocation: string;
    dropLocation: string;
    alreadyBookedBy: string[];
}