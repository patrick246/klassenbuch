import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {NotizenListeComponent} from "./notizen-liste.component";

describe('NotizenListeComponent', () => {
	let component: NotizenListeComponent;
	let fixture: ComponentFixture<NotizenListeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NotizenListeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotizenListeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
