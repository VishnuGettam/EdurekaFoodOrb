import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeedComponent } from './userfeed.component';

describe('UserfeedComponent', () => {
  let component: UserfeedComponent;
  let fixture: ComponentFixture<UserfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
