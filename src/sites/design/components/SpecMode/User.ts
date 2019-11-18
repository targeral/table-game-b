export class User {
    private name: string;
    private age: number;
    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public toString(): string {
        return `用户姓名：${this.name} \t年龄： ${this.age}`;
    }
}