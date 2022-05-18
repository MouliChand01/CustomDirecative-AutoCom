import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { CustomserviceService } from './customservice.service';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective implements OnInit {
  constructor(private href: ElementRef, private ser: CustomserviceService) { }
  name: any;
  @Input() defaultvalue:string="";

  ngOnInit() {
    this.href.nativeElement.value = this.defaultvalue
  }
  @HostListener("keyup") onkeyup() {
    if (this.href.nativeElement.value.length >= 3) {
      this.ser.getRestaurants().subscribe((res: any) => {this.name = res.filter((ele: { name: string; })=>ele.name.startsWith(this.defaultvalue));
        console.log(this.defaultvalue)
        this.ser.sendName(this.name)});
      this.href.nativeElement.style.backgroundColor = "white";
     
    }
    else {
      this.href.nativeElement.style.backgroundColor = "green"
    }
  }

}