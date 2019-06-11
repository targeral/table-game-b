export class Wizard {
    private rand: Function = Math.random;

    private first(): Number {
        console.log('执行第一个方法。。。');
        return Math.floor(this.rand() * 100);
    }

    private second(): Number {
        console.log('执行第二个方法。。。');
        return Math.floor(this.rand() * 100);
    }

    private third(): Number {
        console.log('执行第三个方法。。。');
        return Math.floor(this.rand() * 100);
    }

    public installWizard(): void {
        const first = this.first();
        if (first > 50) {
            const second = this.second();
            if (second > 50) {
                const third = this.third();
                if (third > 50) {
                    this.first();
                }
            }
        }
    }
}

export class InstallSoftWare {
    public installWizard(wizard: Wizard): void {
        wizard.installWizard();
    }
}

export class Client {
    public start(): void {
        const invoker: InstallSoftWare = new InstallSoftWare();
        invoker.installWizard(new Wizard());
    }
}