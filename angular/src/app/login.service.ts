import {Injectable} from "@angular/core";
import {User} from "./user";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";

@Injectable()
export class LoginService {

	private userDb: User[] = [
		{
			username: 'admin',
			fullName: 'Administrator',
			password: 'admin'
		}
	];

	private loggedIn: boolean = false;
	private currentUser: User = null;

	constructor() {
		let users = localStorage.getItem('klassenbuch_users');
		if (users !== null) {
			this.userDb = JSON.parse(users);
		} else {
			localStorage.setItem('klassenbuch_users', JSON.stringify(this.userDb));
		}

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
		let user = this.userDb.find(user => user.username === username);
		if (user && user.password === password) {
			this.loggedIn = true;
			this.currentUser = user;
			this.save();
			return Observable.of(user);
		}
		return Observable.throw(new Error('User/Password combination not found'));
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
