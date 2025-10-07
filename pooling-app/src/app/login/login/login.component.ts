import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-login',
  	imports: [FormsModule],
  	templateUrl: './login.component.html',
  	styleUrl: './login.component.css',
})
export class LoginComponent {
	id: string = '';

	constructor(
		private service: AppService,
		private route: Router
	) {}

	isIdInvalid() {
		return this.id.length !== 6 || isNaN(Number(this.id))
	}

	onSubmit() {
		this.service.employeeId = this.id;

		this.route.navigate(['/home'])
	}
}
