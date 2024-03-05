import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGroundOutComponent } from './play-ground-out.component';

describe('PlayGroundOutComponent', () => {
  let component: PlayGroundOutComponent;
  let fixture: ComponentFixture<PlayGroundOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayGroundOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayGroundOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
