import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SchuelerEditComponent} from "./schueler-edit.component";

describe('SchuelerEditComponent', () => {
  let component: SchuelerEditComponent;
  let fixture: ComponentFixture<SchuelerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchuelerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchuelerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
