import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  isUserLoggedIn: boolean;
  isAdminLoggedIn: boolean;


  constructor(private httpClient: HttpClient) {
    this.isUserLoggedIn = false;
    this.isAdminLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  getUserLoggedStatus(): boolean {
    return this.isUserLoggedIn;
  }
  setUserLogout() {
    this.isUserLoggedIn = false;
  }
  


  setAdminLoggedIn() {
    this.isAdminLoggedIn = true;
  }
  getAdminLoggedStatus(): boolean {
    return this.isAdminLoggedIn;
  }
  setAdminLogout() {
    this.isAdminLoggedIn = false;
  }




  logout(): void {
    this.isUserLoggedIn = false;
    this.isAdminLoggedIn = false;
  }



  registerCustomer(customerData: any): any {
    return this.httpClient.post("http://localhost:8080/register", customerData);
  }

  registerBooking(customerData: any): any {
    return this.httpClient.post("http://localhost:8080/registerBooking", customerData);
  }

  registerCard(customerData: any): any {
    return this.httpClient.post("http://localhost:8080/registerCard", customerData);
  }

  registerKtmBike(customerData: any): any {
    return this.httpClient.post("http://localhost:8080/registerKtmBike", customerData);
  }
  registerRoyalEnfieldBike(customerData: any): any {
    return this.httpClient.post("http://localhost:8080/registerRoyalEnfieldBike", customerData);
  }

  getAllCustomers(): any {
    return this.httpClient.get("http://localhost:8080/getAllCustomers")
  }

  getAllBookings(): any {
    return this.httpClient.get("http://localhost:8080/getAllBookings")
  }

  showAllCards(): any {
    return this.httpClient.get("http://localhost:8080/showAllCards")
  }

  getAllKtmbikes(): any {
    return this.httpClient.get("http://localhost:8080/getAllKtmbikes")
  }

  getAllRoyalEnfieldBikes(): any {
    return this.httpClient.get("http://localhost:8080/getAllRoyalEnfieldBikes")
  }

  getAllKtmModels(): any {
    return this.httpClient.get("http://localhost:8080/getAllKtmModels")
  }

  getKtmByBikeName(name: string): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getKtmBikeByName/" + name);
  }

  showCardName(name: string): Observable<any> {
    return this.httpClient.get("http://localhost:8080/showCardName/" + name);
  }

  deleteCardByName(name: string): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/deleteCard/" + name);
  }


  registerService(serviceData: any): any {
    return this.httpClient.post("http://localhost:8080/registerService", serviceData)
  }

  getAllServices(): any {
    return this.httpClient.get("http://localhost:8080/getAllServices")
  }
}
