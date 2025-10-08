import { FormGroup } from "@angular/forms";

// export function isValidEmpId(control: FormControl) {
//     if (control.value && (control.value.length !== 6 || isNaN(Number(control.value)))) {
//         control.setErrors({InvalidEmployeeId: true});
//     }
//     else {
//         control.setErrors(null);
//     }
// }

export function isValidEmpId(empId: string): (formGroup: FormGroup) => void {
    return (formGroup: FormGroup) => {
        const control = formGroup.get(empId);

        if (control?.value) {
            control.value.length !== 6 || isNaN(Number(control.value)) ?
                control.setErrors({InvalidEmployeeId: true}) : control?.setErrors(null);
        }
    }
}

export function isVehicleNumberValid(vehNum: string): (formGroup: FormGroup) => void {
    return (formGroup: FormGroup) => {
        const control = formGroup.get(vehNum);

        if (control?.value) {
            control.value.match('^[A-Z]{2}[-][0-9]{2}[-][A-Z]{2}[-][0-9]{4}$') ?
                control.setErrors(null) : control.setErrors({InvalidVehicalNumber: true});
        }
    }
}

export function isMoreThanCurrentTime(time: string): (formGroup: FormGroup) => void {
    return (formGroup: FormGroup) => {
        const control = formGroup.get(time);

        const now = new Date();
        const nowMins = now.getMinutes();
        const nowHours = now.getHours();

        if (control?.value) {
           const time = control.value.split(':');

            if (time[0] > nowHours) {
                control.setErrors(null);
            }
            else if (time[0] == nowHours) {
                time[1] > nowMins ? control.setErrors(null) : control.setErrors({InvalidTime: true})
            }
            else {
                control.setErrors({InvalidTime: true})
            }
        }
    }
}

export function isDropPickupSame(pickup: string, drop: string): (formGroup: FormGroup) => void {
    return (formGroup: FormGroup) => {
        const pickupControl = formGroup.controls[pickup];
        const dropControl = formGroup.controls[drop];

        if (pickupControl.value && dropControl.value) {
            pickupControl.value === dropControl.value ?
                dropControl.setErrors({SamePickupDrop: true}) : dropControl.setErrors(null);
        }
    }
}
