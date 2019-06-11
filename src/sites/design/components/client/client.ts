export abstract class AbstractGun {
    public abstract shoot(): void;
}

export class HandGun extends AbstractGun {
    public shoot() {
        console.log('手枪射击。。。');
    }
}

export class Rifle extends AbstractGun {
    public shoot() {
        console.log('步枪射击');
    }
}

export class MachineGun extends AbstractGun {
    public shoot() {
        console.log('机枪扫射')
    }
}

export class ToyGun extends AbstractGun {
    public shoot() {}
}

export class AUG extends Rifle {
    public zoomOut() {
        console.log('通过望远镜观察');
    }

    public shoot(): void {
        console.log('AUG 射击');
    }
}

export class A {
    public call(arr: Array<number>) {
        console.log('a', arr);
    }
}

export class AA extends A {
    public call(arr: Array<number | string>) {
        console.log(arr);
    }
}

export class Snipper {
    public killEnemy(aug: AUG) {
        aug.zoomOut();
        aug.shoot();
    }
}

export class Solider {
    private gun!: AbstractGun;

    public setGun(_gun: AbstractGun): void {
        this.gun = _gun;
    }

    /**
     * killEnemy
     */
    public killEnemy() {
        console.log('士兵开始杀敌');
        this.gun.shoot();
    }
}

export class Client {
    public start(): void {
        // let sanMao: Solider = new Solider();
        // sanMao.setGun(new Rifle());
        // sanMao.killEnemy();
        // let sanMao: Snipper = new Snipper();
        // sanMao.killEnemy((new Rifle() as AUG));
        let a = new AA();
        a.call([1, 2, 3]);
    }
}