import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewitemsComponent } from './create-newitems.component';

describe('CreateNewitemsComponent', () => {
  let component: CreateNewitemsComponent;
  let fixture: ComponentFixture<CreateNewitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
