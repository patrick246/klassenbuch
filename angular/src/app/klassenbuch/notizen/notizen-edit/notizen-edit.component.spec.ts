import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {NotizenEditComponent} from "./notizen-edit.component";

describe('NotizenEditComponent', () => {
	let component: NotizenEditComponent;
	let fixture: ComponentFixture<NotizenEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NotizenEditComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotizenEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
