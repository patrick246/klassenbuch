import {Component, OnInit} from "@angular/core";
import {LoginService} from "../login.service";
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
	selector: 'app-klassenbuch',
	templateUrl: './klassenbuch.component.html',
	styleUrls: ['./klassenbuch.component.css']
})
export class KlassenbuchComponent implements OnInit {

	private currentUser: User;

	constructor(private loginService: LoginService, private router: Router) {
	}


	ngOnInit(): void {
		this.currentUser = this.loginService.getCurrentUser();
	}

	public logout(): void {
		this.loginService.logout();
		this.router.navigate(['/'], {queryParams: {logout: true}});
	}
}
