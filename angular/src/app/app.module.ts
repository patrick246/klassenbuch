import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LehrerComponent} from "./lehrer/lehrer.component";
import {LehrerService} from "./lehrer/lehrer.service";
import {LehrerEditComponent} from "./lehrer/lehrer-edit/lehrer-edit.component";
import {LehrerNewComponent} from "./lehrer/lehrer-new/lehrer-new.component";

@NgModule({
	declarations: [
		AppComponent,
		LehrerComponent,
		LehrerEditComponent,
		LehrerNewComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [
		LehrerService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
