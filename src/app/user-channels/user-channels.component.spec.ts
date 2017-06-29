import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChannelsComponent } from './user-channels.component';

describe('UserChannelsComponent', () => {
  let component: UserChannelsComponent;
  let fixture: ComponentFixture<UserChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
