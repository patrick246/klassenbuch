import {inject, TestBed} from "@angular/core/testing";

import {KlassenService} from "./klassen.service";

describe('KlassenService', () => {
	let store = {};

	beforeEach(() => {
		store = {};
		spyOn(window.localStorage, 'getItem').and.callFake((key) => store[key] || null);
		spyOn(window.localStorage, 'setItem').and.callFake((key, value) => store[key] = value);
		spyOn(window.localStorage, 'clear').and.callFake(() => store = {});
	});

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [KlassenService]
		});
	});

	let service: KlassenService;
	beforeEach(inject([KlassenService], (svc: KlassenService) => {
		service = svc;
	}));

	it('should be present', () => {
		expect(service).toBeTruthy();
	});

	it('should contain classes', (done: any) => {
		service.getKlassen().subscribe(klassen => {
			expect(klassen.length).toBe(24);
			done();
		})
	});

	it('should add a new class', (done: any) => {
		service.addKlasse({
			id: null,
			stufe: 11,
			name: "a"
		}).subscribe(klasse => {
			expect(klasse.name).toBe("a");
			expect(klasse.stufe).toBe(11);
			service.getKlassen().subscribe(klassen => {
				expect(klassen).toContain(klasse);
				done();
			});
		});
	});

	it('shouldn\'t add an existing class', (done: any) => {
		service.addKlasse({
			id: null,
			stufe: 10,
			name: "a"
		}).subscribe(
			() => {
			},
			err => {
				expect(err.message).toBe('Diese Klasse existiert bereits');
				service.getKlassen().subscribe(klassen => expect(klassen.length).toBe(24));
				done();
			}
		)
	});

	it('should be able to delete classes', (done: any) => {
		service.deleteKlasse({
			id: null,
			stufe: 10,
			name: "a"
		}).subscribe(
			klasse => {
				expect(klasse.name).toBe("a");
				expect(klasse.stufe).toBe(10);
				service.getKlassen().subscribe(klassen => {
					expect(klassen).not.toContain(klasse);
					done();
				})
			}
		)
	});

	it('should save klassen to localStorage', (done: any) => {
		expect(store['klassenbuch_klassen']).toBeDefined();
		let storedArray = JSON.parse(store['klassenbuch_klassen']);
		expect(storedArray.length).toBe(24);

		service.addKlasse({
			id: null,
			stufe: 11,
			name: "a"
		}).subscribe(klasse => {
			expect(klasse.stufe).toBe(11);
			expect(klasse.name).toBe("a");
			expect(JSON.parse(store['klassenbuch_klassen'])).toContain(klasse);
			done();
		});
	});

	/*it('should update classes', (done: any) => {
		service.updateKlasse({
	 id: null,
			stufe: 10,
			name: "a"
		}, {
			stufe: 10,
			name: "e"
		}).subscribe(klasse => {
			expect(klasse.name).toBe("e");
			expect(klasse.stufe).toBe(10);
			service.getKlassen().subscribe(klassen => {
				expect(klassen).toContain(klasse);
				expect(klassen).not.toContain({
					stufe: 10,
					name: "a"
				});
				done();
			});
		})
	 });*/
});
