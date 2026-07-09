import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadocompraComponent } from './encabezadocompra.component';

describe('EncabezadocompraComponent', () => {
  let component: EncabezadocompraComponent;
  let fixture: ComponentFixture<EncabezadocompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadocompraComponent]
    });
    fixture = TestBed.createComponent(EncabezadocompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
