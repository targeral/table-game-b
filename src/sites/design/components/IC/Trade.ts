export class Trade {
    private tradeNo: string = '';
    private amount: number = 0;

    setTradeNo(tradeNo: string): void {
        this.tradeNo = tradeNo;
    }

    getTradeNo(): string {
        return this.tradeNo;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }

    getAmount(): number {
        return this.amount;
    }
}