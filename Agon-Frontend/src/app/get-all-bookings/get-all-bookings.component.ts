import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-get-all-bookings',
  templateUrl: './get-all-bookings.component.html',
  styleUrl: './get-all-bookings.component.css'
})
export class GetAllBookingsComponent {
  bookings:any;
  constructor(private router:Router,private service:CustomerService) {}

  ngOnInit(): void {
    this.service.getAllBookings().subscribe((data:any)=>{
      this.bookings=data;
    })
  }
}
