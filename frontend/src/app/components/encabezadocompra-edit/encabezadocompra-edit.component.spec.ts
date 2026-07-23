import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadocompraEditComponent } from './encabezadocompra-edit.component';

describe('EncabezadocompraEditComponent', () => {
  let component: EncabezadocompraEditComponent;
  let fixture: ComponentFixture<EncabezadocompraEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadocompraEditComponent]
    });
    fixture = TestBed.createComponent(EncabezadocompraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
