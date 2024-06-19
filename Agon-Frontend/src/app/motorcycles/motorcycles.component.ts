import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-motorcycles',
  templateUrl: './motorcycles.component.html',
  styleUrl: './motorcycles.component.css'
})
export class MotorcyclesComponent {
  motorcycles: any;
  constructor(private router: Router, private service: CustomerService) {

  }
  ngOnInit(): void {
    this.service.showAllCards().subscribe((data: any) => {
      this.motorcycles = data;
      console.log(data);
    });
  }
}
