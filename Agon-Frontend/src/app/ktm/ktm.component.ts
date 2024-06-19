import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-ktm',
  templateUrl: './ktm.component.html',
  styleUrl: './ktm.component.css'
})
export class KtmComponent {
  ktm: any;
  name: any;
  constructor(private router: Router, private service: CustomerService) {

  }
  ngOnInit(): void {
    this.service.getAllKtmbikes().subscribe((data: any) => {
      this.ktm = data;
      console.log(data);
    });
    
  }

}
