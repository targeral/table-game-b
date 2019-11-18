export interface IHanFeiZi {
    haveBreakfast(): void;
    haveFun(): void;
}

export default class HanFeiZi implements IHanFeiZi {
    private isHavingBreakfast: boolean = false;
    private isHavingFun: boolean = false;

    haveBreakfast() {
        console.log('hfz吃饭');
        this.isHavingBreakfast = true;
    }

    haveFun() {
        console.log('hfz娱乐');
        this.isHavingFun = true;
    }
}