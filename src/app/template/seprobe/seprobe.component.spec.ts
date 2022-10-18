import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeprobeComponent } from './seprobe.component';

describe('SeprobeComponent', () => {
  let component: SeprobeComponent;
  let fixture: ComponentFixture<SeprobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeprobeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeprobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
