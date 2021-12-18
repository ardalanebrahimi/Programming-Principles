console.log('---------------------------')
console.log('-----------Code2-----------')
console.log('---------------------------')

let product2 = new Product2()
product2.name = 'Book';
product2.price = 1234;
product2.quantity = 7;

let salesInvoiceHandler = new SalesInvoiceHandler(product2);
let accountingHandler = new AccountingHandler(product2);
let marginHandler = new MarginHandler(
    salesInvoiceHandler.getTotalSellingPrice(),
    accountingHandler.getTotalPrice());

salesInvoiceHandler.createSalesInvoice();
accountingHandler.createFinAccounting();
marginHandler.calcMargin();
