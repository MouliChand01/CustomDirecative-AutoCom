import { Component, OnInit } from '@angular/core';
import { CustomserviceService } from '../customservice.service';

@Component({
  selector: 'app-runtimeselection-api',
  templateUrl: './runtimeselection-api.component.html',
  styleUrls: ['./runtimeselection-api.component.css']
})
export class RuntimeselectionApiComponent implements OnInit {
  myurls: any = [];
  indexval: any;
  empData: any;
  // ------------- //
  age: any;
  email: any;
  mobileNumber: any;
  div1 = false;
  div2 = false;
  div3 = false;

  constructor(public ser: CustomserviceService) { }

  ngOnInit(): void {
    this.myurls = this.ser.ListOfUrls
    this.indexval = this.myurls[2] // this variable helps to set default urls in dropdown it menas last index of urls
  }

  selected($event: any) {
    this.ser.selectedUrl = $event.target.value;
    this.ser.getselectedurlData().subscribe((data: any) => this.empData = data);
    if ($event.target.value === "http://localhost:3000/userData1") {
      this.div1 = true
      this.div2 = false
      this.div3 = false
    }
    else if ($event.target.value === "http://localhost:3000/userData2") {
      this.div1 = false
      this.div2 = true
      this.div3 = false
    }
    else if ($event.target.value === "http://localhost:3000/userData3") {
      this.div1 = false
      this.div2 = false
      this.div3 = true
    }
  }

  sendNewData() {
    if (this.age) {
      this.ser.postselectedurlData({Age:this.age});
    }
    else if (this.email) {
      console.log(this.email)
    }
    else if (this.mobileNumber) {
      console.log(this.mobileNumber)
    }
  }
}
