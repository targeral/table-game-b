import Purchase from './Purchase';
import Sale from './Sale';
import Stock from './Stock';

export abstract class AbstractMediator {
    protected purchase: Purchase;
    protected sale: Sale;
    protected stock: Stock;

    constructor() {
        this.purchase = new Purchase();
        this.sale = new Sale();
        this.stock = new Stock();
    }

    /**
     * execute
     */
    public abstract execute(str: string): void;
}

export default class Mediator extends AbstractMediator {
    /**
     * execute
     */
    public execute(str: string, ...rest: any[]) {
        if (str === 'purchase.buy') {
            this.buyComputed(<number>rest[0]);
        } else if (str === 'sall.sell') {
            this.sellComputer(<number>rest[0]);
        } else if (str === 'sall.offsel') {
            this.offsell();
        } else if (str === 'stock.clear') {
            this.clearStock();
        }
    }

    // 采购电脑
    private buyComputed(number: number): void {
        const saleStatus = super.sale.getSaleStatus();
        if (saleStatus > 80) {// 销售情况良好
            console.log(`采购IBM电脑：${number} 台`);
            super.stock.increase(number);
        } else {// 销售情况不好，折半采购
            const buyNumber = number / 2;
            console.log(`采购IBM电脑：${buyNumber} 台`);
        }
    }

    // 销售电脑
    private sellComputer(number: number): void {
        if (super.stock.getStockNumber() < number) {
            super.purchase.buyIBMComputer(number);
        }
        super.stock.decrease(number);
    }

    private offsell(): void {
       console.log(`折价销售电脑：${super.stock.getStockNumber()}`);
    }

    private clearStock() {
        super.sale.offsale();
        super.purchase.refuseBuyIBM();
    }
}