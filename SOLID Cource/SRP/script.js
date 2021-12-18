
class Product {

    set name(val) { this._name = val; }
    get name() { return this._name; }

    set price(val) { this._price = (Math.ceil(val / 100)) * 100; }
    // set price(val) { this._price = val; }
    get price() { return this._price; }

    set quantity(val) { this._quantity = val; }
    get quantity() { return this._quantity; }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    getTotalSellingPrice() {
        return this.getTotalPrice() * 1.1;
    }

    createSalesInvoice() {
        console.log('---Sales Invoice----');
        console.log(
            'name:',this.name, 
            '- Q:', this.quantity, 
            '- Price:',this.getTotalSellingPrice());
        console.log('------------');
    }

    createFinAccounting(){
        console.log('---Financial Accounting Record----');
        console.log(
            'name:',this.name, 
            '- Q:', this.quantity, 
            '- Price:',this.getTotalPrice());
        console.log('------------');
    }

    calcMargin() {
        console.log('---Margin----');
        console.log('Margin(%)-->', (Math.round(this.getTotalSellingPrice() / this.getTotalPrice() * 100) -100), '%');
        console.log('Margin-->', this.getTotalSellingPrice() - this.getTotalPrice())
        console.log('------------');
    }
}
console.log('-----Code1-----')

let product = new Product()
product.name = 'Book';
product.price = 1234;
product.quantity = 7;

product.createSalesInvoice();
product.createFinAccounting();
product.calcMargin();
