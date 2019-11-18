import { Employee } from "./employee";
import { IVisitor } from "./Visitor";

export class Manager extends Employee {
    private performace!: string;

    public getPerformace(): string {
        return this.performace;
    }

    public setPerformace(performace: string): void {
        this.performace = performace;
    }

    public accept(visitor: IVisitor): void {
        visitor.visit(this);
    }
}