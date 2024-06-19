import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { DominarComponent } from './dominar/dominar.component';
import { Dominar250Component } from './dominar250/dominar250.component';
import { N250Component } from './n250/n250.component';
import { Ns200Component } from './ns200/ns200.component';
import { F250Component } from './f250/f250.component';
import { F220Component } from './f220/f220.component';
import { Rs200Component } from './rs200/rs200.component';
import { N160Component } from './n160/n160.component';
import { Ns160Component } from './ns160/ns160.component';
import { N150Component } from './n150/n150.component';
import { AvengerComponent } from './avenger/avenger.component';
import { Pulsar150Component } from './pulsar150/pulsar150.component';
import { Ns125Component } from './ns125/ns125.component';
import { Pulsar125Component } from './pulsar125/pulsar125.component';
import { Ct125Component } from './ct125/ct125.component';
import { PlatinaComponent } from './platina/platina.component';
import { ChetakComponent } from './chetak/chetak.component';
import { BikebookingComponent } from './bikebooking/bikebooking.component';
import { KtmComponent } from './ktm/ktm.component';
import { RoyalenfieldComponent } from './royalenfield/royalenfield.component';
import { KtmbikesComponent } from './ktmbikes/ktmbikes.component';
import { Duke390Component } from './duke390/duke390.component';
import { Rc390Component } from './rc390/rc390.component';
import { Duke200Component } from './duke200/duke200.component';
import { Rc200Component } from './rc200/rc200.component';
import { Duke250Component } from './duke250/duke250.component';
import { ServiceComponent } from './service/service.component';
import { New1Component } from './new1/new1.component';
import { News2Component } from './news2/news2.component';
import { News3Component } from './news3/news3.component';
import { News4Component } from './news4/news4.component';
import { News5Component } from './news5/news5.component';
import { Classic350Component } from './classic-350/classic-350.component';
import { Dominar400Component } from './dominar400/dominar400.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { Gt650Component } from './gt-650/gt-650.component';
import { Hunter350Component } from './hunter-350/hunter-350.component';
import { KtmRC390Component } from './ktm-rc390/ktm-rc390.component';
import { KTM390Component } from './ktm390/ktm390.component';
import { PulsarN160Component } from './pulsar-n160/pulsar-n160.component';
import { PulsarNs200Component } from './pulsar-ns200/pulsar-ns200.component';
import { ShotgunComponent } from './shotgun/shotgun.component';
import { SlideComponent } from './slide/slide.component';
import { CardsComponent } from './cards/cards.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { AdminComponent } from './admin/admin.component';
import { GetAllBookingsComponent } from './get-all-bookings/get-all-bookings.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { GetAllServicesComponent } from './get-all-services/get-all-services.component';
import { AdminpushComponent } from './adminpush/adminpush.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    HomeComponent,
    MotorcyclesComponent,
    DominarComponent,
    Dominar250Component,
    N250Component,
    Ns200Component,
    F250Component,
    F220Component,
    Rs200Component,
    N160Component,
    Ns160Component,
    N150Component,
    New1Component,
    News2Component,
    News3Component,
    News4Component,
    News5Component,
    ShotgunComponent,
    FooterComponent,
    SlideComponent,
    Classic350Component,
    PulsarN160Component,
    GoogleSignInComponent,
    KTM390Component,
    KtmRC390Component,
    Dominar400Component,
    PulsarNs200Component,
    Gt650Component,
    Hunter350Component,
    AvengerComponent,
    Pulsar150Component,
    Ns125Component,
    Pulsar125Component,
    Ct125Component,
    PlatinaComponent,
    ChetakComponent,
    BikebookingComponent,
    KtmComponent,
    RoyalenfieldComponent,
    KtmbikesComponent,
    Duke390Component,
    Rc390Component,
    Duke200Component,
    Rc200Component,
    Duke250Component,
    ServiceComponent,
    DominarComponent,
    Dominar250Component,
    N250Component,
    Ns200Component,
    F250Component,
    CardsComponent,
    AdminComponent,
    GetAllBookingsComponent,
    GetAllUsersComponent,
    GetAllServicesComponent,
    AdminpushComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '150965070401-aftlgu8sun935s49tctqigl2tit840up.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
