import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobOffersComponent } from './create-job-offers.component';

describe('CreateJobOffersComponent', () => {
  let component: CreateJobOffersComponent;
  let fixture: ComponentFixture<CreateJobOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
