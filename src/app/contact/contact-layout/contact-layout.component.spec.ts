import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLayoutComponent } from './contact-layout.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactLayoutComponent', () => {
  let component: ContactLayoutComponent;
  let fixture: ComponentFixture<ContactLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ContactLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
