import {inject, TestBed} from "@angular/core/testing";

import {UUIDService} from "./uuid.service";

describe('UUIDService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [UUIDService]
		});
	});

	it('should ...', inject([UUIDService], (service: UUIDService) => {
		expect(service).toBeTruthy();
	}));
});
