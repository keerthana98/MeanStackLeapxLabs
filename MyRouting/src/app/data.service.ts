import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';// import Injectable framework from core to application
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root' //will be shared across all components
})
export class DataService {

  constructor(private http:HttpClient) { }//http -local variable

  getUsers()
  {
    return this.http.get('https://reqres.in/api/users');
  }

}
