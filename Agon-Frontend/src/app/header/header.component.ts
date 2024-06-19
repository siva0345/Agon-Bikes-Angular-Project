import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private customerService: CustomerService) { }

  isLoggedIn(): boolean {
    return this.customerService.getUserLoggedStatus();
  }

  isAdmin(): boolean {
    return this.customerService.getAdminLoggedStatus();
  }

  onLogout(): void {
    this.customerService.logout();
  }
}
