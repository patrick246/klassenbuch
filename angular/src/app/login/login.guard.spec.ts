import {inject, TestBed} from "@angular/core/testing";

import {LoginGuard} from "./login.guard";
import {LoginService} from "./login.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginGuard', () => {
	let guard;

	class LoginServiceMock {
		public isLoggedIn(): boolean {
			return true;
		}
	}

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule.withRoutes([])],
			providers: [LoginGuard,
				{
					provide: LoginService, useClass: LoginServiceMock
				}
			]
		});
	});

	beforeEach(inject([LoginGuard], (g: LoginGuard) => {
		guard = g;
	}));

	it('should exist', inject([LoginGuard], (guard: LoginGuard) => {
		expect(guard).toBeTruthy();
	}));

	it('should return true on logged in users', () => {
		spyOn((guard as any).loginService, 'isLoggedIn').and.returnValue(true);
		expect(guard.canActivate()).toBe(true);
	});

	it('should redirect to the login page when not logged in', () => {
		spyOn((guard as any).loginService, 'isLoggedIn').and.returnValue(false);
		let navigateSpy = spyOn((guard as any).router, 'navigate');
		expect(guard.canActivate()).toBe(false);
		expect(navigateSpy).toHaveBeenCalledWith(['/login']);
	})
});
