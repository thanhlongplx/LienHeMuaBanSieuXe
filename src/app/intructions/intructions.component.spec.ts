import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntructionsComponent } from './intructions.component';

describe('IntructionsComponent', () => {
  let component: IntructionsComponent;
  let fixture: ComponentFixture<IntructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
