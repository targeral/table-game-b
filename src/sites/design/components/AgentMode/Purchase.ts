import Stock from './Stock';
import Sale from './Sale';

export default class Purchase {
    /**
     * buyIBMComputer
     */
    public buyIBMComputer(number: number): void {
        // 访问库存
        const stock: Stock = new Stock();
        // 访问销售
        const sale: Sale = new Sale();
        const saleStatus: number = sale.getSaleStatus();
        if (saleStatus > 80) {// 销售情况良好
            console.log(`采购IBM电脑：${number} 台`);
            stock.increase(number);
        } else {// 销售情况不好，折半采购
            const buyNumber = number / 2;
            console.log(`采购IBM电脑：${buyNumber} 台`);
        }
    }

    /**
     * refuseBuyIBM
     */
    public refuseBuyIBM() {
        console.log('不再采购');
    }
}