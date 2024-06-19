import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-ktmbikes',
  templateUrl: './ktmbikes.component.html',
  styleUrl: './ktmbikes.component.css'
})
export class KtmbikesComponent {
  ktmModels: any;
  constructor(private router: Router, private service: CustomerService) {

  }
  ngOnInit(): void {
    this.service.getAllKtmModels().subscribe((data: any) => {
      this.ktmModels = data;
      console.log(data);
    });
  }
  
}
