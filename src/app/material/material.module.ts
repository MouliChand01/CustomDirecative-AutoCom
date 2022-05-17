import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule }   from "@angular/material/icon"
import { MatInputModule }  from "@angular/material/input";
import { MatCardModule } from '@angular/material/card';
@NgModule({

imports: [

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatInputModule

],

exports: [

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatInputModule

]

})

export class MaterialModule {}