import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListElementComponent } from './question-list-element.component';

describe('QuestionListElementComponent', () => {
  let component: QuestionListElementComponent;
  let fixture: ComponentFixture<QuestionListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
