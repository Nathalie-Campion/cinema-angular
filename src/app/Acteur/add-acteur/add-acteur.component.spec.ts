import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActeurComponent } from './add-acteur.component';

describe('AddActeurComponent', () => {
  let component: AddActeurComponent;
  let fixture: ComponentFixture<AddActeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
