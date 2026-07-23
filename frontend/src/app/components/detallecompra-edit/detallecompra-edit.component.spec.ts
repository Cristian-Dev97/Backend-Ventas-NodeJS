import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecompraEditComponent } from './detallecompra-edit.component';

describe('DetallecompraEditComponent', () => {
  let component: DetallecompraEditComponent;
  let fixture: ComponentFixture<DetallecompraEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallecompraEditComponent]
    });
    fixture = TestBed.createComponent(DetallecompraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
