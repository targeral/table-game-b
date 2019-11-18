import Stock from './Stock';
import Purchase from './Purchase';

export default class Sale {
    /**
     * saleIMBComputer
     */
    public saleIMBComputer(number: number): void {
        const stock: Stock = new Stock();
        const purchase: Purchase = new Purchase();
        if (stock.getStockNumber() < number) {// 库存不够
            purchase.buyIBMComputer(number);
        }
        console.log(`销售IBM电脑：${number} 台`);
        stock.decrease(number);
    }

    /**
     * getSaleStatus
     */
    public getSaleStatus(): number {
        const saleStatus = Math.floor(Math.random() * 100);
        console.log(`IBM电脑销售情况：${saleStatus}`);
        return saleStatus;
    }

    /**
     * offsale
     */
    public offsale(): void {
        const stock: Stock = new Stock();
        console.log(`折价销售IBM电脑：${stock.getStockNumber()} 台`);
    }
}