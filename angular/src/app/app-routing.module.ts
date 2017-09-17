import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./login/login.guard";
import {KlassenbuchComponent} from "./klassenbuch/klassenbuch.component";
import {KlassenListeComponent} from "./klassenbuch/klassen-liste/klassen-liste.component";
import {KlassenEditComponent} from "./klassenbuch/klassen-edit/klassen-edit.component";
import {KlassenNewComponent} from "./klassenbuch/klassen-new/klassen-new.component";
import {LehrerEditComponent} from "./lehrer/lehrer-edit/lehrer-edit.component";
import {LehrerNewComponent} from "./lehrer/lehrer-new/lehrer-new.component";
import {LehrerComponent} from "./lehrer/lehrer.component";
import {SchuelerListeComponent} from "./klassenbuch/schueler-liste/schueler-liste.component";
//import {SchuelerNewComponent} from "./klassenbuch/schueler-new/schueler-new.component";
import {NotizenListeComponent} from "./klassenbuch/notizen/notizen-liste/notizen-liste.component";
import {NotizenNewComponent} from "./klassenbuch/notizen/notizen-new/notizen-new.component";
import {NotizenEditComponent} from "./klassenbuch/notizen/notizen-edit/notizen-edit.component";


const routes: Routes = [
	{
		path: '',
		component: KlassenbuchComponent,
		children: [
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
			//{
			//	path: 'schueler/new',
			//	component: SchuelerNewComponent
		//	}
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
