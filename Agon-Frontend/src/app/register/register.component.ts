import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  hidePassword: boolean = true;
  customers: any[] = [];
  firstName: any;
  lastName: any;
  gender: any;
  dateOfBirth: any;
  email: any;
  password: any;
  phone: any;

  constructor(private service: CustomerService, private router: Router) {}

  ngOnInit(): void {}

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  registration(form: any) {
    console.log(form); 
    console.log('Form validity:', form.valid);
    
    if (form) {
      const customerData = {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        email: this.email,
        password: this.password,
        phone: this.phone
      };
      this.service.registerCustomer(customerData).subscribe((data: any) => {
        console.log(customerData);
        console.log(data);
        alert('Registration successful. Please proceed to log in.');
        this.router.navigate(['login']);
      });
    } else {
      alert('Registration failed. Form object is not available.');
    }
  }

}