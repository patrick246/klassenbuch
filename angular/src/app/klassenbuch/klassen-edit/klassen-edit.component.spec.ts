import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {KlassenEditComponent} from "./klassen-edit.component";

describe('KlassenEditComponent', () => {
	let component: KlassenEditComponent;
	let fixture: ComponentFixture<KlassenEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [KlassenEditComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KlassenEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
