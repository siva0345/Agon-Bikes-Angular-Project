import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  constructor(public service: CustomerService) {}
  getAdminLoggedStatus(): boolean {
    return this.service.getAdminLoggedStatus();
  }

  logout(): void {
    this.service.logout();
    console.log(this.service.getAdminLoggedStatus())
    }
}
