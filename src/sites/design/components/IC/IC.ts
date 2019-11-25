export class Card {
    private cardNo: string = '';
    private steadyMoney: number = 0;
    private freeMoney: number = 0;

    setCardNo(cardNo: string): void {
        this.cardNo = cardNo;
    }

    getCardNo(): string {
        return this.cardNo;
    }

    setSteadyMoney(steadyMoney: number): void {
        this.steadyMoney = steadyMoney;
    }

    getSteadyMoney(): number {
        return this.steadyMoney;
    }

    setFreeMoney(freeMoney: number): void {
        this.freeMoney = freeMoney;
    }

    getFreeMoney(): number {
        return this.freeMoney;
    }
}