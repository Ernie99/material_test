import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import { PlainMaterialComponent } from './plain-material/plain-material.component';
import { SidenavMaterialComponent } from './sidenav-material/sidenav-material.component';

@NgModule({
  declarations: [
    AppComponent,
    PlainMaterialComponent,
    SidenavMaterialComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
