import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.bankendApiUrl;
  private customersPath = environment.customersPath;

  constructor(private httpClient: HttpClient) {}

  public getCustomers(): Observable<Customer[]> {
    console.log("calling: " + `${this.apiServerUrl + this.customersPath}`);
    return this.httpClient.get<Customer[]>(`${this.apiServerUrl + this.customersPath}`);
  }


}
