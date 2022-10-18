import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3boardComponent } from './c3board.component';

describe('C3boardComponent', () => {
  let component: C3boardComponent;
  let fixture: ComponentFixture<C3boardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3boardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3boardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
