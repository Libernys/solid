export interface Client {
  name: string;
  mail: string;
}

export interface Invoice {
  id: number;
  code: string;
  amount: number;
  client: Client;
}

export interface InvoiceRepository {
  getInvoiceById(id: number): Invoice;

  save(invoice: Invoice): void;
}

export interface MailSender {
  send(adress: string, subject: string, message: string): void;
}

export interface TaxCalculator {
  calculate(invoice: Invoice): void;
}

export interface PaymentProxy {
  applyInvoicePayment(invoce: Invoice): void;

  //applyPayment()
}

export interface AccountingProxy {
  registerInvoice(invoice: Invoice): void;

  //registerPurchase(purchase: Purchase)
}

export class InvoiceService {
  private invoiceRepository: InvoiceRepository;
  private mailSender: MailSender;
  private taxCalculator: TaxCalculator;
  private paymentProxy: PaymentProxy;
  private accountingProxy: AccountingProxy;


  constructor(invoiceRepository: InvoiceRepository, mailSender: MailSender, taxCalculator: TaxCalculator, paymentProxy: PaymentProxy, accountingProxy: AccountingProxy) {
    this.invoiceRepository = invoiceRepository;
    this.mailSender = mailSender;
    this.taxCalculator = taxCalculator;
    this.paymentProxy = paymentProxy;
    this.accountingProxy = accountingProxy;
  }

  apply(invoice: Invoice) {
    this.taxCalculator.calculate(invoice);
    this.invoiceRepository.save(invoice);
    this.paymentProxy.applyInvoicePayment(invoice);
    this.mailSender.send(invoice.client.mail,
      `Invoice ${invoice.code}`,
      `Thank you for your invoice ${invoice.code} with amount ${invoice.amount}`);
    this.accountingProxy.registerInvoice(invoice);
  }
}
