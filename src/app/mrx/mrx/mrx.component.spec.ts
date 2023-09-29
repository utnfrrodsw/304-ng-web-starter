import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrxComponent } from './mrx.component';

describe('MrxComponent', () => {
  let component: MrxComponent;
  let fixture: ComponentFixture<MrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
