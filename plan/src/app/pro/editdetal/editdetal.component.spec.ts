import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetalComponent } from './editdetal.component';

describe('EditdetalComponent', () => {
  let component: EditdetalComponent;
  let fixture: ComponentFixture<EditdetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
