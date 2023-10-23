import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrxComponent } from './mrx.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../../services/api.servce';

class ApiServiceMock {
  getRandomUser() {
    return {};
  }
}

describe('MrxComponent', () => {
  let component: MrxComponent;
  let fixture: ComponentFixture<MrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ MrxComponent ],
      providers: [
        //  ApiService
        { provide: ApiService, useClass: ApiServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const service = TestBed.inject(ApiService);
    const fixture = TestBed.createComponent(MrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
