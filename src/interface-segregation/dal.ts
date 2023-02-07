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

export interface Dal {
  // Product
  getAllProducts(): Product[];

  saveProduct(product: Product): void;

  deleteProduct(id: number): void
  
  getProductByCode(code: string): Product;

  // Customer
  getAllCustomers(): Customer[];

  getCustomerByName(name: string): Customer;

  saveCustomer(customer: Customer): void;

  deleteCustomer(id: number): void

  // Invoice
  getAllInvoices() :Invoice;

  getInvoiceByCode(code:string): Invoice;

  saveInvoice(invoice: Invoice) : void

}


export class ProductService{
  private dal: Dal;

  constructor(dal: Dal) {
    this.dal = dal;
  }
  // ...
  addProduct(code:string): void{
    const product: Product = {
      code: code
    }
    this.dal.saveProduct(product)
  }

  // ...
}
