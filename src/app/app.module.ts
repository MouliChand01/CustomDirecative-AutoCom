import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { Ng2CompleterModule } from 'ng2-completer';
import { CustomcomponetComponent } from './customcomponet/customcomponet.component';

@NgModule({

declarations: [

AppComponent,
 CustomdirectiveDirective,
 CustomcomponetComponent

],

imports: [

BrowserModule,
FormsModule,
HttpClientModule,
MaterialModule,
BrowserAnimationsModule ,
MatDatepickerModule,
Ng2CompleterModule 

],

providers: [],

bootstrap: [AppComponent]

})

export class AppModule { }