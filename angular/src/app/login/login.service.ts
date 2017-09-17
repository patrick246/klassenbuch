import {Injectable} from "@angular/core";
import {User} from "./user";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import {LehrerService} from "../klassenbuch/lehrer/lehrer.service";

@Injectable()
export class LoginService {
	private loggedIn: boolean = false;
	private currentUser: User = null;

	constructor(private lehrerService: LehrerService) {
		let loggedIn = localStorage.getItem('klassenbuch_login');
		if (loggedIn !== null) {
			this.loggedIn = JSON.parse(loggedIn);
		} else {
			localStorage.setItem('klassenbuch_login', JSON.stringify(this.loggedIn));
		}

		let currentUser = localStorage.getItem('klassenbuch_login_currentUser');
		if (currentUser !== null) {
			this.currentUser = JSON.parse(currentUser);
		}
	}

	public isLoggedIn(): boolean {
		return this.loggedIn;
	}

	public getCurrentUser(): User {
		return this.currentUser;
	}

	public login(username: string, password: string): Observable<User> {
		return this.lehrerService.getLehrerByLogin(username).map(lehrer => {
			if (lehrer.password === password) {
				this.loggedIn = true;
				let user = {
					username: lehrer.loginName,
					fullName: `${lehrer.firstName} ${lehrer.lastName}`
				};
				this.currentUser = user;
				this.save();
				return user;
			}
			return Observable.throw(new Error('User/Password combination not found'));
		});
	}

	public logout(): void {
		this.currentUser = null;
		this.loggedIn = false;
		this.save();
	}

	private save(): void {
		localStorage.setItem('klassenbuch_login', JSON.stringify(this.loggedIn));
		localStorage.setItem('klassenbuch_login_currentUser', JSON.stringify(this.currentUser));
	}
}
