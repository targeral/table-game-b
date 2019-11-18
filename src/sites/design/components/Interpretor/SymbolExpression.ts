import {Expression} from './expression';

export default class SymbolExpression extends Expression {
    public left: Expression;
    public right: Expression;

    constructor(_left: Expression, _right: Expression) {
        super();
        console.log(_left, _right);
        this.left = _left;
        this.right = _right;
    }
    interpreter(_var: Map<string, number>): number {
        return 0;
    }
    show() {
        console.log(this.right, this.left);
    }

    useLeft() {
        return this.left;
    }

    useRight() {
        return this.right;
    }
}