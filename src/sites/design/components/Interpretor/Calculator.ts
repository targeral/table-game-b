import { Expression } from "./expression";
import VarExpression from "./VarExpression";
import SubExpression from "./SubExpression";
import AddExpression from "./AddExpression";

export default class Calculator {
    private expression: Expression;
    constructor(expStr: string) {
        const stack: Expression[] = [];
        let left: Expression;
        let right: Expression;
        for(let i = 0; i < expStr.length; i++) {
            switch (expStr[i]) {
                case '+':
                    left = <Expression>stack.pop();
                    right = new VarExpression(expStr[++i]);
                    stack.push(new AddExpression(left, right));
                    break;
                case '-':
                    left = <Expression>stack.pop();
                    right = new VarExpression(expStr[++i]);
                    stack.push(new SubExpression(left, right));
                    break;
                default:
                    stack.push(new VarExpression(expStr[i]));
            }
        }
        this.expression = <Expression>stack.pop();
    }

    /**
     * run
     */
    public run(_var: Map<string, number>) {
        return this.expression.interpreter(_var);
    }
}