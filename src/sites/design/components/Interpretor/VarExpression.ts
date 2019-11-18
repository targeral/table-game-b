import {Expression} from './expression';

export default class VarExpression extends Expression {
    private key: string;

    constructor(_key: string) {
        super();
        this.key = _key;
    }
    public interpreter(_var: Map<string, number>): number {
        return <number>_var.get(this.key);
    }
}