import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customcomponet',
  templateUrl: './customcomponet.component.html',
  styleUrls: ['./customcomponet.component.css']
})
export class CustomcomponetComponent implements OnInit {
  value =1
  constructor() { }

  ngOnInit(): void {
  }

}
