import ICorp from "./ICorp";

export interface ILeaf extends ICorp {
}

export default class Leaf implements ILeaf {
    private name: string;
    private position: string;
    private salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getInfo(): string {
        return `
            姓名：${this.name}
            职位：${this.position}
            薪水：${this.salary}
        `;
    }
}
