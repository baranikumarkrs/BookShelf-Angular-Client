import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateBookFormComponent } from './add-update-book-form.component';

describe('AddUpdateBookFormComponent', () => {
  let component: AddUpdateBookFormComponent;
  let fixture: ComponentFixture<AddUpdateBookFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateBookFormComponent]
    });
    fixture = TestBed.createComponent(AddUpdateBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
