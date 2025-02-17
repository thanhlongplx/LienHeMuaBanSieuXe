import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandbodyComponent } from './brandbody.component';

describe('BrandbodyComponent', () => {
  let component: BrandbodyComponent;
  let fixture: ComponentFixture<BrandbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandbodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
