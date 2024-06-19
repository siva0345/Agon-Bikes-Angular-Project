import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminpush',
  templateUrl: './adminpush.component.html',
  styleUrl: './adminpush.component.css'
})
export class AdminpushComponent {
  Bikes: any[] = [];
  name: any
  matter: any
  route: any
  url: any
  bikes:any

  constructor(public service: CustomerService, private router: Router,private http:HttpClient) { }
  ngOnInit(): void { 
  }

  getAdminLoggedStatus(): boolean {
    return this.service.getAdminLoggedStatus();
  }

  logout(): void {
    this.service.logout();
    console.log(this.service.getAdminLoggedStatus())
  }
  addBike(form: any) {
    const bikesData = {
      name: form.value.name,
      matter: form.value.matter,
      route: form.value.route,
      url: form.value.url,

    };
    this.service.registerCard(bikesData).subscribe((data: any) => {
      alert("Bike Added Successfully.")
      console.log(bikesData);
      console.log(data);
    });
  }

  deleteBike(form: any) {
    const name = form.value.name;
    this.service.deleteCardByName(name).subscribe(() => {
      console.log(`Deleted bike with name: ${name}`);
      alert("Bike Added Successfully.")
    }, error => {
      console.error('Error deleting bike:', error);
    });
  }
}
