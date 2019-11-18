export abstract class Expression {
    public abstract interpreter(vars: Map<string, number>): number;
}