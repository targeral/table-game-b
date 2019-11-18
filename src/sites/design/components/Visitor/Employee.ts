import { IVisitor } from "./Visitor";

export abstract class Employee {
    static MALE: number = 0;
    static FEMALE: number = 1;
    private name!: string;
    private salary!: number;
    private sex!: number;

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number): void {
        this.salary = salary;
    }

    public getSex(): number {
        return this.sex;
    }

    public setSex(sex: number): void {
        this.sex = sex;
    }

    protected abstract accept(visitor: IVisitor): void;
}