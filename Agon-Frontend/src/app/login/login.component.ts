import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { SocialUser, GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;
  customer: any;
  email: any;
  password: any;

  constructor(private router: Router, private readonly authService: SocialAuthService, private service: CustomerService) { }


  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        this.router.navigate(['home']);;
        this.service.setUserLoggedIn()
      }
    });
  }

  loginValidate(form: any) {
    if (form.email == "admin@gmail.com" && form.password == "admin@") {
      alert("admin login sucess")
      setTimeout(()=>{
        this.service.setAdminLoggedIn()
        this.router.navigate(['/home'])
      },1000)
      return;
    } else {
      this.service.getAllCustomers().subscribe((data: any) => {

        for (let emp of data) {
          if (emp.email === form.email && emp.password === form.password) {
            alert(this.email + " login success")
            this.service.setUserLoggedIn()

            console.log(emp);
            this.router.navigate(['/home'])
            return;
          }
        }

        alert("login failed");

      });
    }
  }
}