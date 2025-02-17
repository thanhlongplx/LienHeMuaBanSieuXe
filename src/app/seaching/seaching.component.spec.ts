import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachingComponent } from './seaching.component';

describe('SeachingComponent', () => {
  let component: SeachingComponent;
  let fixture: ComponentFixture<SeachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeachingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
