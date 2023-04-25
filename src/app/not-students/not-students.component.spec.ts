import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotStudentsComponent } from './not-students.component';

describe('NotStudentsComponent', () => {
  let component: NotStudentsComponent;
  let fixture: ComponentFixture<NotStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
