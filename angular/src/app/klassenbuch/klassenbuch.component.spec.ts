import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {KlassenbuchComponent} from "./klassenbuch.component";

describe('KlassenbuchComponent', () => {
	let component: KlassenbuchComponent;
	let fixture: ComponentFixture<KlassenbuchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [KlassenbuchComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KlassenbuchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
