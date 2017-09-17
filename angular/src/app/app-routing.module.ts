import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./login/login.guard";
import {KlassenbuchComponent} from "./klassenbuch/klassenbuch.component";
import {KlassenListeComponent} from "./klassenbuch/klassen/klassen-liste/klassen-liste.component";
import {KlassenEditComponent} from "./klassenbuch/klassen/klassen-edit/klassen-edit.component";
import {KlassenNewComponent} from "./klassenbuch/klassen/klassen-new/klassen-new.component";
import {LehrerEditComponent} from "./klassenbuch/lehrer/lehrer-edit/lehrer-edit.component";
import {LehrerNewComponent} from "./klassenbuch/lehrer/lehrer-new/lehrer-new.component";
import {LehrerComponent} from "./klassenbuch/lehrer/lehrer.component";
import {SchuelerListeComponent} from "./klassenbuch/schueler/schueler-liste/schueler-liste.component";
import {SchuelerNewComponent} from "./klassenbuch/schueler/schueler-new/schueler-new.component";
import {SchuelerEditComponent} from "./klassenbuch/schueler/schueler-edit/schueler-edit.component";
import {NotizenListeComponent} from "./klassenbuch/notizen/notizen-liste/notizen-liste.component";
import {NotizenNewComponent} from "./klassenbuch/notizen/notizen-new/notizen-new.component";
import {NotizenEditComponent} from "./klassenbuch/notizen/notizen-edit/notizen-edit.component";
import {DashboardComponent} from "./klassenbuch/dashboard/dashboard.component";


const routes: Routes = [
	{
		path: '',
		component: KlassenbuchComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'notes',
				component: NotizenListeComponent
			},
			{
				path: 'notes/new',
				component: NotizenNewComponent
			},
			{
				path: 'notes/:id',
				component: NotizenEditComponent
			},
			{
				path: 'class',
				component: KlassenListeComponent
			},
			{
				path: 'class/new',
				component: KlassenNewComponent
			},
			{
				path: 'class/:id',
				component: KlassenEditComponent
			},
			{
				path: 'lehrer',
				component: LehrerComponent
			},
			{
				path: 'lehrer/new',
				component: LehrerNewComponent
			},
			{
				path: 'lehrer/:id',
				component: LehrerEditComponent
			},
			{
				path: 'schueler',
				component: SchuelerListeComponent
			},
			{
				path: 'schueler/new',
				component: SchuelerNewComponent
			},
			{
				path: 'schueler/:id',
				component: SchuelerEditComponent
			}
		],
		canActivate: [LoginGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
