import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to bookride page if clicked book a ride', () => {
    const spyNavigate = spyOn(router, 'navigate');
    component.bookRide();
    expect(spyNavigate).toHaveBeenCalledWith(['/bookride']);
  });

  it('should navigate to addride page if clicked add a ride', () => {
    const spyNavigate = spyOn(router, 'navigate');
    component.addRide();
    expect(spyNavigate).toHaveBeenCalledWith(['/addride']);
  });
});
