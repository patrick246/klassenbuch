import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LehrerComponent} from "./lehrer/lehrer.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./login/login.guard";
import {KlassenbuchComponent} from "./klassenbuch/klassenbuch.component";
import {KlassenListeComponent} from "./klassenbuch/klassen-liste/klassen-liste.component";
import {KlassenEditComponent} from "./klassenbuch/klassen-edit/klassen-edit.component";
import {KlassenNewComponent} from "./klassenbuch/klassen-new/klassen-new.component";
import {LehrerEditComponent} from "./lehrer/lehrer-edit/lehrer-edit.component";
import {LehrerNewComponent} from "./lehrer/lehrer-new/lehrer-new.component";


const routes: Routes = [
	{
		path: '',
		children: []
	},
	{
		path: '',
		component: KlassenbuchComponent,
		children: [
			{
				path: 'class',
				component: KlassenListeComponent
			},
			{
				path: 'lehrer',
				component: LehrerComponent
			},
			{
				path:'lehrer/lehrer-edit',
				component: LehrerEditComponent
			},
			{
				path:'lehrer/lehrer-new',
				component: LehrerNewComponent
			},
			{
				path: 'class/:stufe/:name',
				component: KlassenEditComponent
			},
			{
				path: 'class/new',
				component: KlassenNewComponent
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
