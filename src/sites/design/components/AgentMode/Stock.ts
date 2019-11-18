import Purchase from './Purchase';
import Sale from './Sale';

export default class Stock {
    private static COMPUTER_NUMBER = 100;
    /**
     * increase
     */
    public increase(number: number): void {
        Stock.COMPUTER_NUMBER = Stock.COMPUTER_NUMBER + number;
        console.log(`库存数量：${Stock.COMPUTER_NUMBER}`);
    }

    /**
     * descrease
     */
    public decrease(number: number): void {
        Stock.COMPUTER_NUMBER = Stock.COMPUTER_NUMBER - number;
        console.log(`库存数量：${Stock.COMPUTER_NUMBER}`);
    }

    public getStockNumber(): number {
        return Stock.COMPUTER_NUMBER;
    }

    /**
     * clear
     */
    public clearStock() {
        const purchase: Purchase = new Purchase();
        const sale: Sale = new Sale();
        console.log(`清理存货数量为：${Stock.COMPUTER_NUMBER}`);
        sale.offsale();
        purchase.refuseBuyIBM();
    }
}