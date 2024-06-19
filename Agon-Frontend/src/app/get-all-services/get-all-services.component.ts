import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-get-all-services',
  templateUrl: './get-all-services.component.html',
  styleUrl: './get-all-services.component.css'
})
export class GetAllServicesComponent {
  bikeServiceList:any;
  constructor(private router:Router,private service:CustomerService) {}

  ngOnInit(): void {
    this.service.getAllServices().subscribe((data:any)=>{
      this.bikeServiceList=data;
    })
  }
}
