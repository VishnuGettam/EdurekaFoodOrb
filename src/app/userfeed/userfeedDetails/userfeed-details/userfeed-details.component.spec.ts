import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeedDetailsComponent } from './userfeed-details.component';

describe('UserfeedDetailsComponent', () => {
  let component: UserfeedDetailsComponent;
  let fixture: ComponentFixture<UserfeedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfeedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfeedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
