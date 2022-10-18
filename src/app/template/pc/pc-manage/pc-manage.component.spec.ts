import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcManageComponent } from './pc-manage.component';

describe('PcManageComponent', () => {
  let component: PcManageComponent;
  let fixture: ComponentFixture<PcManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
