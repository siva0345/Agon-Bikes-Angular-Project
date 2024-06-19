import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-royalenfield',
  templateUrl: './royalenfield.component.html',
  styleUrl: './royalenfield.component.css'
})
export class RoyalenfieldComponent {
  royalenfield: any;
  constructor(private router: Router, private service: CustomerService) {

  }
  ngOnInit(): void {
    this.service.getAllRoyalEnfieldBikes().subscribe((data: any) => {
      this.royalenfield = data;
      console.log(data);
    });
  }
}
