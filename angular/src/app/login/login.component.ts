import {Component, OnInit} from "@angular/core";
import {LoginData} from "./login-data";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private model: LoginData = {username: "", password: ""};
	private error: string;

	constructor(private loginService: LoginService, private router: Router) {
	}

	ngOnInit(): void {
		if (this.loginService.isLoggedIn()) {
			this.router.navigate(['/']);
		}
	}

	public login() {
		this.loginService.login(this.model.username, this.model.password).subscribe(user => {
			this.router.navigate(['/']);
		}, error => {
			this.error = error.message;
		});
	}

}
