import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./login/login.guard";

const routes: Routes = [
	{
		path: '',
		children: [],
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
