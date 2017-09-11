import {TestBed, inject, async} from '@angular/core/testing';
import 'rxjs/add/operator/catch';

import {LoginService} from './login.service';

describe('LoginService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LoginService]
		});
	});

	it('should be injected', inject([LoginService], (service: LoginService) => {
		expect(service).toBeTruthy();
	}));

	it('should return not logged in', inject([LoginService], (service: LoginService) => {
		expect(service.isLoggedIn()).toBeFalsy();
	}));

	it('should login with admin/admin', async(inject([LoginService], (service: LoginService) => {
		expect(service.isLoggedIn()).toBeFalsy();
		service.login('admin', 'admin').subscribe(user => {
			expect(user).toBeDefined();
			expect(user.username).toBe('admin');
			expect(user.fullName).toBe('Administrator');
			expect(service.isLoggedIn()).toBeTruthy();
		});
	})));

	it('shouldn\'t login with false credentials', async(inject([LoginService], (service: LoginService) => {
		expect(service.isLoggedIn()).toBeFalsy();
		service.login('admin', 'test').subscribe(
			user => {},
			err => {
				expect(err.message).toBe('User/Password combination not found');
			}
		)
	})));
});
