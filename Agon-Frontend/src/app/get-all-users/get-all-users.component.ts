import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrl: './get-all-users.component.css'
})
export class GetAllUsersComponent {
  users:any;
  constructor(private router:Router,private service:CustomerService) {}

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((data:any)=>{
      this.users=data;
    })
  }
}
