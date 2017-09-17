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
import {LehrerService} from "./lehrer/lehrer.service";
import {LehrerNewComponent} from "./lehrer/lehrer-new/lehrer-new.component";
import {LehrerEditComponent} from "./lehrer/lehrer-edit/lehrer-edit.component";
import {LehrerComponent} from "./lehrer/lehrer.component";
import {UUIDService} from "./uuid.service";
import {SchuelerListeComponent} from "./klassenbuch/schueler-liste/schueler-liste.component";
import {SchuelerService} from "./schueler.service";
import {NotizenListeComponent} from "./klassenbuch/notizen/notizen-liste/notizen-liste.component";
import {NotizenService} from "./klassenbuch/notizen/notizen.service";
import {NotizenNewComponent} from "./klassenbuch/notizen/notizen-new/notizen-new.component";
import {NotizenEditComponent} from "./klassenbuch/notizen/notizen-edit/notizen-edit.component";
import {SchuelerNewComponent} from "./klassenbuch/schueler-new/schueler-new.component";
import {SchuelerEditComponent} from "./schueler-edit/schueler-edit.component";
import {DashboardComponent} from "./klassenbuch/dashboard/dashboard.component";
import {QuickNotizComponent} from "./klassenbuch/dashboard/quick-notiz/quick-notiz.component";


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		KlassenbuchComponent,
		KlassenListeComponent,
		KlassenEditComponent,
		KlassenNewComponent,
		LehrerComponent,
		LehrerEditComponent,
		LehrerNewComponent,
		SchuelerListeComponent,
		NotizenListeComponent,
		NotizenNewComponent,
		NotizenEditComponent,
		SchuelerNewComponent,
		SchuelerEditComponent,
		DashboardComponent,
		QuickNotizComponent
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
		KlassenService,
		LehrerService,
		UUIDService,
		NotizenService,
		SchuelerService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
