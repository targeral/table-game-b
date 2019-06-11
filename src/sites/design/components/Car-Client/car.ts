export interface ICar {
    run: () => void;
}

export class Benz implements ICar {
    /**
     * run
     */
    public run() {
        console.log('奔驰汽车开始跑');
    }
}

export class BMW implements ICar {
    /**
     * run
     */
    public run() {
        console.log('宝马汽车开始跑');
    }
}

export interface IDriver {
    setCar: (car: ICar) => void;
    drive: () => void;
}

export class Driver implements IDriver {
    private car!: ICar;

    /**
     * setCar
     */
    public setCar(car: ICar) {
        this.car = car;
    }

    public drive() {
        this.car.run();
    }
}

export class Client {
    public start(): void {
        const benz: ICar = new Benz();
        const zhangSan: IDriver = new Driver();
        zhangSan.setCar(benz);
        zhangSan.drive();
    }
}