import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from './layout.component';
import { Router } from '@angular/router';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to some url', () => {
    const router = TestBed.inject(Router);
    const spyNavigate = spyOn(router, 'navigate');
    component.goToTarget('some-url');
    expect(spyNavigate).toHaveBeenCalled();
    expect(spyNavigate).toHaveBeenCalledWith(['some-url']);
  });

  it('should navigate to login', () => {
    const router = TestBed.inject(Router);
    const spyNavigate = spyOn(router, 'navigate');
    component.goToTarget('some-url2');
    expect(spyNavigate).toHaveBeenCalled();
    expect(spyNavigate).toHaveBeenCalledWith(['login']);
  });
});
