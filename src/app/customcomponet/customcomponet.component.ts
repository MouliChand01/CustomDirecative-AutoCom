import { Component, OnInit } from '@angular/core';
import { CustomserviceService } from '../customservice.service';

@Component({
  selector: 'app-customcomponet',
  templateUrl: './customcomponet.component.html',
  styleUrls: ['./customcomponet.component.css']
})
export class CustomcomponetComponent implements OnInit {
  value:string=""
  names:any
  constructor(private ser:CustomserviceService) { }

  ngOnInit(): void {
    this.ser.getName().subscribe((val)=>{this.names=val.text,console.log(val.text)})
  }

}
