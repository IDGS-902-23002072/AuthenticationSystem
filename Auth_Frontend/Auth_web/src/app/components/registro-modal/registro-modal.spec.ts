import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroModal } from './registro-modal';

describe('RegistroModal', () => {
  let component: RegistroModal;
  let fixture: ComponentFixture<RegistroModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroModal],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
