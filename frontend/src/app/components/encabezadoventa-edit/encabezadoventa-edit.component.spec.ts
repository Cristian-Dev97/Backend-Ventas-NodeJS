import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoventaEditComponent } from './encabezadoventa-edit.component';

describe('EncabezadoventaEditComponent', () => {
  let component: EncabezadoventaEditComponent;
  let fixture: ComponentFixture<EncabezadoventaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoventaEditComponent]
    });
    fixture = TestBed.createComponent(EncabezadoventaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
