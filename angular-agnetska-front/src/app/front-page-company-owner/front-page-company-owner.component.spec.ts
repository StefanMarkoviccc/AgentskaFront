import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageCompanyOwnerComponent } from './front-page-company-owner.component';

describe('FrontPageCompanyOwnerComponent', () => {
  let component: FrontPageCompanyOwnerComponent;
  let fixture: ComponentFixture<FrontPageCompanyOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPageCompanyOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageCompanyOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
