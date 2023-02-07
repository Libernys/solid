import { Dal } from "./dal";

interface Product {
  id?: number;
  code: string;
}

interface Customer {
  id?: number;
  name: string;
}

interface Invoice {
  id?: number;
  code: string;
  customer: Customer;
  items: { product: Product, price: number, amount: number };
}

export interface ProductRepository{
  getAllProducts(): Product[];

  saveProduct(product: Product): void;

  deleteProduct(id: number): void

  getProductByCode(code: string): Product;
}

export interface CustomerRepository {
  getAllCustomers(): Customer[];

  getCustomerByName(name: string): Customer;

  saveCustomer(customer: Customer): void;

  deleteCustomer(id: number): void
}

export interface InvoiceRepository {
  getAllInvoices() :Invoice;

  getInvoiceByCode(code:string): Invoice;

  saveInvoice(invoice: Invoice) : void
}


export class ProductService{
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

// ...
  addProduct(code:string): void{
    const product: Product = {
      code: code
    }
    this.productRepository.saveProduct(product)
  }

  // ...
}
