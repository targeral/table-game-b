import ICorp from "./ICorp";

export interface IBranch extends ICorp {
    addSubordinate(corp: ICorp): void;
    getSubordinate(): ICorp[];
}

export default class Branch implements IBranch {
    private name: string;
    private position: string;
    private salary: number;
    subordinateList!: ICorp[];

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    addSubordinate(corp: ICorp): void {
        this.subordinateList.push(corp);
    }

    getSubordinate(): ICorp[] {
        return this.subordinateList;
    }

    getInfo(): string {
        return `
            姓名：${this.name}
            职位：${this.position}
            薪水：${this.salary}
        `;
    }
}