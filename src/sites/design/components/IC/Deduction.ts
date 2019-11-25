import {Card} from './IC';
import {Trade} from './Trade';

export interface IDeduction {
    exec(card: Card, trade: Trade): boolean;
}

export class SteadyDeduction implements IDeduction {
    exec(card: Card, trade: Trade) {
        let halfMoney = trade.getAmount() * 0.5;
        card.setSteadyMoney(card.getSteadyMoney() - halfMoney);
        card.setFreeMoney(card.getFreeMoney() - halfMoney);
        return true;
    }
}

export class FreeDedution implements IDeduction {
    exec(card: Card, trade: Trade) {
        card.setFreeMoney(card.getFreeMoney() - trade.getAmount());
        return true;
    }
}

export class DeductionContext {
    private deduction: IDeduction;
    constructor(_deduction: IDeduction) {
        this.deduction = _deduction;
    }

    public exec(card: Card, trade: Trade): boolean {
        return this.deduction.exec(card, trade);
    }
}

enum a {
    a = 1,
    b = '2'
}