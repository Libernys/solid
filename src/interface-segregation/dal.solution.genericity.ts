interface Entity {
  id?: number;
}

interface Product extends Entity {
  code: string;
}

interface Customer extends Entity {
  name: string;
}

interface Invoice extends Entity {
  code: string;
  customer: Customer;
  items: { product: Product, price: number, amount: number };
}

export interface Repository<T extends Entity> {
  getAll(): T[];

  save(entity: T): void;

  deleteById(id: number): void;

  getById(id: number): T;
}

export interface ProductRepository extends Repository<Product> {
  getProductByCode(code: string): Product;
}

export interface CustomerRepository extends Repository<Customer> {
  getCustomerByName(name: string): Customer;
}

export interface InvoiceRepository extends Repository<Invoice> {
}

export class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

// ...
  addProduct(code: string): void {
    const product: Product = {
      code: code
    };
    this.productRepository.save(product);
  }
  // ...
}
