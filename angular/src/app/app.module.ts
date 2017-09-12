import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoginService} from "app/login.service";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
	  AppComponent,
	  LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
      LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
