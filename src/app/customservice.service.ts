import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'





@Injectable({
  providedIn: 'root'
})
export class CustomserviceService {
  _url = "http://localhost:3000/userList1"
  
  private subject = new BehaviorSubject<any>('Hello')

  constructor(private _http: HttpClient) { }

  getRestaurants() {
    return this._http.get(this._url)
  }

  sendName(data:string){
    this.subject.next({text:data})
  }

  getName(){
    return this.subject.asObservable()
  }
}
