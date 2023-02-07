export interface Client{
  name: string;
  mail: string;
}
export interface Invoice{
  code: string;
  amount: number;
  client: Client;
}
export class InvoiceService{
    apply(invoice: Invoice){
      this.calculateTaxes(invoice);
      this.saveInvoice(invoice);
      this.applyPayment(invoice);
      this.sendMailToClient(invoice);
      this.registerInvoiceInAccounting(invoice);
    }

  calculateTaxes(invoice: Invoice) {
    console.log("Calculating taxes with a complex algorithm");
  }

  sendMailToClient(invoice: Invoice) {
    const message = `Thank you for your invoice ${invoice.code} with amount ${invoice.amount}`;
    console.log(`Sending mail to client ${invoice.client.name} with mail ${invoice.client.mail} and message ${message}`);
  }

  applyPayment(invoice: Invoice) {
    console.log("Applying payment calling the payment web service");
  }

  saveInvoice(invoice: Invoice) {
    console.log("Saving invoice to database");
  }

  registerInvoiceInAccounting(invoice: Invoice) {
    console.log("Registering the invoice operation in the accounting system calling a web service");
  }
}
