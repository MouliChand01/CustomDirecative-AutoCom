import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class CustomserviceService {
  _url = "http://localhost:3000/userList"

  ListOfUrls = ["http://localhost:3000/userData1", "http://localhost:3000/userData2", "http://localhost:3000/userData3"]
  selectedUrl:any;

  private subject = new BehaviorSubject<any>('Hello')


  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get(this._url)
  }

  getselectedurlData(){
    return this.http.get(this.selectedUrl)
  }

  postselectedurlData(data:any){
    console.log(data)
    return this.http.put(this.selectedUrl,data)
  }

  // this methods i can use in custom direcatives 
  sendName(data: string) {
    this.subject.next({ text: data })
  }
  getName() {
    return this.subject.asObservable()
  }

}
