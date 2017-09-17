import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {KlassenNewComponent} from "./klassen-new.component";

describe('KlassenNewComponent', () => {
	let component: KlassenNewComponent;
	let fixture: ComponentFixture<KlassenNewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [KlassenNewComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KlassenNewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
