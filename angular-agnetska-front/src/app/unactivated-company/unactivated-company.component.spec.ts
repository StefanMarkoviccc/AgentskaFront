import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnactivatedCompanyComponent } from './unactivated-company.component';

describe('UnactivatedCompanyComponent', () => {
  let component: UnactivatedCompanyComponent;
  let fixture: ComponentFixture<UnactivatedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnactivatedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnactivatedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
