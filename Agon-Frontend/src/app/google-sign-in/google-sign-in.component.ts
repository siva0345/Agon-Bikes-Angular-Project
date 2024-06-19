import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrl: './google-sign-in.component.css'
})
export class GoogleSignInComponent implements OnInit {
  
  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;
      customers: any;
      email:any;
      password: any;
     
  constructor(private router:Router, private readonly authService: SocialAuthService,private service:CustomerService) {}
  
  ngOnInit() {
      this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user) {
          this.router.navigate(['home']);; 
        }
      });
  }
            login(form:any): void {
              if (form.email === 'com' && form.password === '123') {
  
                alert('Welcome to Admin Home Page');
                this.service.setUserLoggedIn();
                this.router.navigate(['adminlogin']);
          
              } else {
              this.service.getAllCustomers().subscribe((data: any) => {
                
                for (const employee of data) {
                 
                  if (this.email === employee.email && this.password === employee.password) {
                    this.service.setUserLoggedIn();
                    console.log("login success")
                    this.router.navigate(['home']);
                    return; 
                  }
                }
                alert('Invalid credentials');
              });
            }}
  
  
}
