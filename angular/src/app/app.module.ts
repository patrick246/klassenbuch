import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoginService} from "app/login.service";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./login/login.guard";
import {KlassenbuchComponent} from "./klassenbuch/klassenbuch.component";
import {KlassenListeComponent} from "./klassenbuch/klassen-liste/klassen-liste.component";
import {KlassenService} from "./klassen.service";
import {KlassenEditComponent} from "./klassenbuch/klassen-edit/klassen-edit.component";
import {KlassenNewComponent} from "./klassenbuch/klassen-new/klassen-new.component";

@NgModule({
  declarations: [
	  AppComponent,
	  LoginComponent,
	  KlassenbuchComponent,
	  KlassenListeComponent,
	  KlassenEditComponent,
	  KlassenNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
	  LoginService,
	  LoginGuard,
	  KlassenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
