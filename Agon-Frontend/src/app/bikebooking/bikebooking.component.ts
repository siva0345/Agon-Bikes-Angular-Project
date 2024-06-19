import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bikebooking',
  templateUrl: './bikebooking.component.html',
  styleUrl: './bikebooking.component.css'
})
export class BikebookingComponent {
  customers: any[] = [];
  fullName:any
  adharNo:any
  dateOfBirth:any
  email:any
  mobileNo:any
  state:any;
  city:any;
  model:any;
  constructor(private service:CustomerService, private router:Router){

  }
  ngOnInit(): void {
    
    }
    bikeBooking(from:any){
      const customerData = {
        fullName: this.fullName,
        adharNo: this.adharNo,
        dateOfBirth: this.dateOfBirth,
        email: this.email,
        mobileNo: this.mobileNo,
        state:this.state,
        city:this.city,
        model:this.model
      };
      this.service.registerBooking(customerData).subscribe((data: any) => {
        console.log(customerData);
        console.log(data);
        this.router.navigate(['motorcycles'])
    });
  }
}
