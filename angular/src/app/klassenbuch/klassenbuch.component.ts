import {Component, OnInit} from "@angular/core";
import {LoginService} from "../login.service";
import {User} from "../user";

@Component({
	selector: 'app-klassenbuch',
	templateUrl: './klassenbuch.component.html',
	styleUrls: ['./klassenbuch.component.css']
})
export class KlassenbuchComponent implements OnInit {

	private currentUser: User;

	constructor(private loginService: LoginService) {
	}


	ngOnInit(): void {
		this.currentUser = this.loginService.getCurrentUser();
	}
}
