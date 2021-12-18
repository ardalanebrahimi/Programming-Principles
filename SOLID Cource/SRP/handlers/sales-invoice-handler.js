class SalesInvoiceHandler{ 
    constructor(product){
        this.product = product;
    }

    getTotalSellingPrice() {
        return (Math.ceil(this.product.price / 100)) * 100
        // return this.product.price
        * this.product.quantity
        * 1.1;
    }

    createSalesInvoice() {
        console.log('---Sales Invoice----');
        console.log(
            'name:',this.product.name, 
            '- Q:', this.product.quantity, 
            '- Price:',this.getTotalSellingPrice());
        console.log('------------');
    }    
}