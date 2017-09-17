import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {KlassenListeComponent} from "./klassen-liste.component";

describe('KlassenListeComponent', () => {
	let component: KlassenListeComponent;
	let fixture: ComponentFixture<KlassenListeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [KlassenListeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KlassenListeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
