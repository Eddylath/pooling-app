import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AppService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [LoginComponent],
      imports: [LoginComponent, RouterTestingModule],
      providers: [AppService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    service = TestBed.inject(AppService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work on different employee IDs', () => {
    component.id = '123456'
    expect(component.isIdInvalid()).toBeFalse();

    component.id = '12aaaa'
    expect(component.isIdInvalid()).toBeTrue();

    component.id = '1234'
    expect(component.isIdInvalid()).toBeTrue();
  })

  it('should navigate to home on submit', () => {
    const spyNavigate = spyOn(router, 'navigate');
    component.id = '123456';
    component.onSubmit();

    expect(service.employeeId).toBe('123456');
    expect(spyNavigate).toHaveBeenCalledWith(['/home']);
  })
});
