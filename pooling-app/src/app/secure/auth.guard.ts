import { inject } from "@angular/core";
import { CanActivateFn, CanDeactivateFn, Router } from "@angular/router";
import { AppService } from "../app.service";
import { AddRideComponent } from "./add-ride/add-ride.component";

export const isAuthorized: CanActivateFn = () => {
    const router = inject(Router);
    const service = inject(AppService);

    return service.employeeId ? true : router.navigate(['']);
}

export const loseFormData: CanDeactivateFn<AddRideComponent> = (component: AddRideComponent) => {
    return component.addRideForm.dirty ? confirm('You have unsaved data. Are you sure you want to go away?') : true;
}
