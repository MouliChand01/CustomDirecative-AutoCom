import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'apptostercomponent',
  templateUrl: './tostercomponent.component.html',
  styleUrls: ['./tostercomponent.component.css']
})
export class TostercomponentComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  SucessToastr(){
   this.toastr.success("something sucess",'Sucess')
  }

}
