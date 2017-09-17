import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuelerListeComponent } from './schueler-liste.component';

describe('SchuelerListeComponent', () => {
  let component: SchuelerListeComponent;
  let fixture: ComponentFixture<SchuelerListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchuelerListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchuelerListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
