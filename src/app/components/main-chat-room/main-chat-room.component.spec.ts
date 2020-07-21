import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatRoomComponent } from './main-chat-room.component';

describe('MainChatRoomComponent', () => {
  let component: MainChatRoomComponent;
  let fixture: ComponentFixture<MainChatRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChatRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
