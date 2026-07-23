import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreastrabajoEditComponent } from './areastrabajo-edit.component';

describe('AreastrabajoEditComponent', () => {
  let component: AreastrabajoEditComponent;
  let fixture: ComponentFixture<AreastrabajoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreastrabajoEditComponent]
    });
    fixture = TestBed.createComponent(AreastrabajoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
