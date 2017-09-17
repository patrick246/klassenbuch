import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {QuickNotizComponent} from "./quick-notiz.component";

describe('QuickNotizComponent', () => {
	let component: QuickNotizComponent;
	let fixture: ComponentFixture<QuickNotizComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [QuickNotizComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(QuickNotizComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
