import { TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/services/product-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
