import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'

import { AppComponent } from './app.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { Ng2CompleterModule } from 'ng2-completer';
import { CustomcomponetComponent } from './customcomponet/customcomponet.component';
import { RuntimeselectionApiComponent } from './runtimeselection-api/runtimeselection-api.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { TostercomponentComponent } from './tostercomponent/tostercomponent.component';

@NgModule({

declarations: [
 AppComponent,
 CustomdirectiveDirective,
 CustomcomponetComponent,
 RuntimeselectionApiComponent,
 SweetalertComponent,
 TostercomponentComponent

],

imports: [
BrowserModule,
FormsModule,
HttpClientModule,
BrowserAnimationsModule ,
MatDatepickerModule,
Ng2CompleterModule ,
ToastrModule.forRoot({
    timeOut:1000,
    progressBar:true,
    progressAnimation:'increasing'
})

],

providers: [],

bootstrap: [AppComponent]

})

export class AppModule { }