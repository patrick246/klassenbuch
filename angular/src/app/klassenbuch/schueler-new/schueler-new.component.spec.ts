import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuelerNewComponent } from './schueler-new.component';

describe('SchuelerNewComponent', () => {
  let component: SchuelerNewComponent;
  let fixture: ComponentFixture<SchuelerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchuelerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchuelerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
