import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewpcComponent } from './create-newpc.component';

describe('CreateNewpcComponent', () => {
  let component: CreateNewpcComponent;
  let fixture: ComponentFixture<CreateNewpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
