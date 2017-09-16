import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {NotizenNewComponent} from "./notizen-new.component";

describe('NotizenNewComponent', () => {
	let component: NotizenNewComponent;
	let fixture: ComponentFixture<NotizenNewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NotizenNewComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotizenNewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
