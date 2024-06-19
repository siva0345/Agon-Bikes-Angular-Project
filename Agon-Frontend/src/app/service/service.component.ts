import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  states: string[] = [];
  
  // Initialize formData with default values for each field
  formData: any = {
    full_name: '',
    email: '',
    state: '',
    city: '',
    service_date: '',
    motorcycle_model: '',
     // Assuming terms acceptance is initially set to false
  };

  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit(): void {
    // Mock data for states (replace with actual data if available)
    this.states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
  }

  submitForm(from:any): void {    
    // Handle form submission logic here
    const serviceData = {
      fullName:this.formData.full_name,
      email:this.formData.email,
      state:this.formData.state,
      city:this.formData.city,
    servicedate:this.formData.service_date,
    bikemodel:this.formData.motorcycle_model


    };
    this.service.registerService(serviceData).subscribe((data: any) => {
      console.log(serviceData);
      console.log(data);
      this.router.navigate(['login'])
  });
    console.log("Form submitted!");
    console.log(this.formData);
  }
}