import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";

import {LoginComponent} from "./login.component";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {LoginService} from "../login.service";
import {User} from "../user";
import {Observable} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	class LoginServiceMock {
		public login(username: string, password: string): Observable<User> {
			return Observable.of({
				username,
				fullName: username
			});
		}

		public isLoggedIn(): boolean {
			return false;
		}
	}

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				RouterTestingModule.withRoutes([])
			],
			declarations: [LoginComponent],
			providers: [
				{provide: LoginService, useClass: LoginServiceMock}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render a form with 2 inputs', () => {
		fixture.detectChanges();
		expect(fixture.debugElement.query(By.css('form'))).toBeTruthy();
		let inputs = fixture.debugElement.queryAll(By.css('input'));
		expect(inputs.length).toBe(2);
		expect(inputs[0].nativeElement.id).toBe('username');
		expect(inputs[1].nativeElement.id).toBe('password');
	});

	it('should redirect after login with correct credentials', fakeAsync(() => {
		let navigateSpy = spyOn((component as any).router, 'navigate');

		(component as any).model.username = 'admin';
		(component as any).model.password = 'admin';
		fixture.detectChanges();
		component.login();
		tick();
		expect(navigateSpy).toHaveBeenCalledWith(['/']);
	}));

	it('should display an error message after logging in with wrong credentials', fakeAsync(() => {
		let navigateSpy = spyOn((component as any).router, 'navigate');
		spyOn((component as any).loginService, 'login').and.returnValue(Observable.throw(new Error('Wrong credentials')));
		(component as any).model.username = 'test';
		(component as any).model.password = 'test';
		fixture.detectChanges();
		component.login();
		tick();
		expect(navigateSpy).not.toHaveBeenCalled();
		expect((component as any).error).toBeTruthy();
		fixture.detectChanges();
		let alert = fixture.debugElement.query(By.css('div.alert'));
		expect(alert).toBeTruthy();
		expect(alert.nativeElement.innerHTML).toContain('Wrong credentials');
	}));
});
