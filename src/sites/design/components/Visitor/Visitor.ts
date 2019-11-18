import { CommonEmployee } from "./CommonEmployee";
import { Manager } from "./Manager";
import { Employee } from "./employee";

export interface IVisitor {
    visit(cm: CommonEmployee | Manager): void;
}

export class Visitor implements IVisitor {
    private getBasicInfo(employee: Employee): string {
        return `
            姓名：${employee.getName()}
            性别：${employee.getSex() === Employee.FEMALE ? '女' : '男'}
            薪水：${employee.getSalary()}
        `;
    }
    private getCommonEmployeeInfo(commonEmployee: CommonEmployee): string {
        return `
            ${this.getBasicInfo(commonEmployee)}
            工作：${commonEmployee.getJob()}
        `;
    }
    private getManageInfo(manager: Manager): string {
        return `
            ${this.getBasicInfo(manager)}
            业绩：${manager.getPerformace()}
        `;
    }
    visit(employee: CommonEmployee | Manager): void {
        if (employee instanceof CommonEmployee) {
            console.log(this.getCommonEmployeeInfo(employee));
        } else {
            console.log(this.getManageInfo(employee));
        }
    }
}