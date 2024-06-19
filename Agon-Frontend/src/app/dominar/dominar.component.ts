import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dominar',
  templateUrl: './dominar.component.html',
  styleUrl: './dominar.component.css'
})
export class DominarComponent {
constructor(private router : Router, private service:CustomerService){

}
}
