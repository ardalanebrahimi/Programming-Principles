
class MarginHandler{   
    constructor(salePrice, purchasePrice){
        this.salePrice = salePrice;
        this.purchasePrice = purchasePrice;
    }

    calcMargin() {
        console.log('---Margin----');
        console.log('Margin-->', (Math.round(this.salePrice / this.purchasePrice * 100) -100));
        console.log('Margin-->', this.salePrice - this.purchasePrice)
        console.log('------------');
    }
}