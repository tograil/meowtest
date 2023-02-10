import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeowListComponent } from './meow-list.component';

describe('MeowListComponent', () => {
  let component: MeowListComponent;
  let fixture: ComponentFixture<MeowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeowListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
