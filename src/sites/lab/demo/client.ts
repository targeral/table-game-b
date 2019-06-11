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
    constructor() {
        let sanMao: Solider = new Solider();
        sanMao.setGun(new Rifle());
        sanMao.killEnemy();
    }
}