import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetalComponent } from './addetal.component';

describe('AddetalComponent', () => {
  let component: AddetalComponent;
  let fixture: ComponentFixture<AddetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
