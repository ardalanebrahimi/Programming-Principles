class AccountingHandler{    
    constructor(product){
        this.product = product;
    }

    getTotalPrice() {
        return this.product.price * this.product.quantity;
    }

    createFinAccounting(){
        console.log('---Financial Accounting Record----');
        console.log(
            'name:',this.product.name, 
            '- Q:', this.product.quantity, 
            '- Price:',this.getTotalPrice());
        console.log('------------');
    }

}