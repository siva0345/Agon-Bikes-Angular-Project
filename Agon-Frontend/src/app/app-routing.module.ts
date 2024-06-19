import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
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
import { Duke250Component } from './duke250/duke250.component';
import { Rc200Component } from './rc200/rc200.component';
import { Duke200Component } from './duke200/duke200.component';
import { ServiceComponent } from './service/service.component';
import { Classic350Component } from './classic-350/classic-350.component';
import { Dominar400Component } from './dominar400/dominar400.component';
import { KtmRC390Component } from './ktm-rc390/ktm-rc390.component';
import { KTM390Component } from './ktm390/ktm390.component';
import { New1Component } from './new1/new1.component';
import { News2Component } from './news2/news2.component';
import { News3Component } from './news3/news3.component';
import { News4Component } from './news4/news4.component';
import { News5Component } from './news5/news5.component';
import { PulsarN160Component } from './pulsar-n160/pulsar-n160.component';
import { ShotgunComponent } from './shotgun/shotgun.component';
import { HomeComponent } from './home/home.component';
import { GetAllBookingsComponent } from './get-all-bookings/get-all-bookings.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { GetAllServicesComponent } from './get-all-services/get-all-services.component';
import { Gt650Component } from './gt-650/gt-650.component';
import { Hunter350Component } from './hunter-350/hunter-350.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: "home", component: HomeComponent , },
  { path: "login", component: LoginComponent },
  { path: "service",component:ServiceComponent, canActivate:[AuthGuard]},
  { path: "register", component: RegisterComponent },
  { path: "logout", component: LogoutComponent },
  { path: "motorcycles", component: MotorcyclesComponent, children: [],canActivate:[AuthGuard] },
  { path: "ktm", component: KtmComponent, children: [],canActivate:[AuthGuard]  },
  { path: "royalenfield", component: RoyalenfieldComponent, children: [],canActivate:[AuthGuard]  },
  { path: "home/triumph-400", component: New1Component },
  { path: "home/triumph-400x", component: News2Component },
  { path: "home/KTM-390", component: News3Component },
  { path: "home/pulsar-p150", component: News4Component },
  { path: "home/KTM", component: News5Component },
  { path: "home/shotgun650", component: ShotgunComponent },
  { path: "home/classic-350", component: Classic350Component},
  { path: "home/duke390", component: Duke390Component },
  { path: "home/rc390", component: Rc390Component },
  { path: "home/dominar400", component: DominarComponent },
  { path: "home/ns200", component: Ns200Component},
  { path: "home/N160", component: PulsarN160Component },
  { path: "motorcycles/dominar400", component: DominarComponent },
  { path: "motorcycles/dominar250", component: Dominar250Component },
  { path: "motorcycles/n250", component: N250Component },
  { path: "motorcycles/f250", component: F250Component },
  { path: "motorcycles/f220", component: F220Component },
  { path: "motorcycles/ns200", component: Ns200Component },
  { path: "motorcycles/rs200", component: Rs200Component },
  { path: "motorcycles/n160", component: N160Component },
  { path: "motorcycles/ns160", component: Ns160Component },
  { path: "motorcycles/n150", component: N150Component },
  { path: "motorcycles/avenger", component: AvengerComponent },
  { path: "motorcycles/pulsar150", component: Pulsar150Component },
  { path: "motorcycles/ns125", component: Ns125Component },
  { path: "motorcycles/pulsar125", component: Pulsar125Component },
  { path: "motorcycles/ct125", component: Ct125Component },
  { path: "motorcycles/platina", component: PlatinaComponent },
  { path: "motorcycles/chetak", component: ChetakComponent },
  { path: "motorcycles/dominar400/bookNow", component: BikebookingComponent },
  { path: "motorcycles/dominar250/bookNow", component: BikebookingComponent },
  { path: "motorcycles/n250/bookNow", component: BikebookingComponent },
  { path: "motorcycles/f250/bookNow", component: BikebookingComponent },
  { path: "motorcycles/f220/bookNow", component: BikebookingComponent },
  { path: "motorcycles/ns200/bookNow", component: BikebookingComponent },
  { path: "motorcycles/rs200/bookNow", component: BikebookingComponent },
  { path: "motorcycles/n160/bookNow", component: BikebookingComponent },
  { path: "motorcycles/ns160/bookNow", component: BikebookingComponent },
  { path: "motorcycles/n150/bookNow", component: BikebookingComponent },
  { path: "motorcycles/avenger/bookNow", component: BikebookingComponent },
  { path: "motorcycles/pulsar150/bookNow", component: BikebookingComponent },
  { path: "motorcycles/ns125/bookNow", component: BikebookingComponent },
  { path: "motorcycles/pulsar125/bookNow", component: BikebookingComponent },
  { path: "motorcycles/ct125/bookNow", component: BikebookingComponent },
  { path: "motorcycles/platina/bookNow", component: BikebookingComponent },
  { path: "motorcycles/chetak/bookNow", component: BikebookingComponent },

  { path: "ktm/duke390", component: Duke390Component },
  { path: "ktm/rc390", component: Rc390Component },
  { path: "ktm/duke250", component: Duke250Component },
  { path: "ktm/rc200", component: Rc200Component },
  { path: "ktm/duke200", component: Duke200Component },
  { path: "ktm/duke390/bookNow", component: BikebookingComponent },
  { path: "ktm/rc390/bookNow", component: BikebookingComponent },
  { path: "ktm/duke250/bookNow", component: BikebookingComponent },
  { path: "ktm/rc200/bookNow", component: BikebookingComponent },
  { path: "ktm/duke200/bookNow", component: BikebookingComponent },
  

  { path: "royalenfield/shotgun650", component: ShotgunComponent },
  { path: "royalenfield/continentalgt650", component: Gt650Component },
  { path: "royalenfield/hunter350", component: Hunter350Component },
  { path: "royalenfield/classic350", component: Classic350Component },
  { path: "royalenfield/shotgun650/bookNow", component: BikebookingComponent },
  { path: "royalenfield/continentalgt650/bookNow", component: BikebookingComponent },
  { path: "royalenfield/hunter350/bookNow", component: BikebookingComponent },
  { path: "royalenfield/classic350/bookNow", component: BikebookingComponent },





  { path: "getAllBookings", component: GetAllBookingsComponent },
  { path: "getAllCustomers", component: GetAllUsersComponent },
  { path: "getAllServices", component:GetAllServicesComponent},
  { path: "admin", component:AdminComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
