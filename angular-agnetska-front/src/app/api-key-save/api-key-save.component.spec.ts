import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiKeySaveComponent } from './api-key-save.component';

describe('ApiKeySaveComponent', () => {
  let component: ApiKeySaveComponent;
  let fixture: ComponentFixture<ApiKeySaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiKeySaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiKeySaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
