import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloTodoComponent } from './trello-todo.component';

describe('TrelloTodoComponent', () => {
  let component: TrelloTodoComponent;
  let fixture: ComponentFixture<TrelloTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrelloTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrelloTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
