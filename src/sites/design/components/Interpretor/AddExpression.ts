import SymbolExpression from './SymbolExpression';
import { Expression } from './expression';

export default class AddExpression extends SymbolExpression {
    constructor(left: Expression, right: Expression) {
        super(left, right);
    }

    public interpreter(_var: Map<string, number>): number {
        return super.useLeft().interpreter(_var) + super.useRight().interpreter(_var);
    }
}