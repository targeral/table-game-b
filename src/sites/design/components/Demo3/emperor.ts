export class Emperor {
    private static emperor: Emperor = new Emperor();
    private constructor() {}

    public static getInstance(): Emperor {
        return this.emperor;
    }

    public say(): void {
        console.log('我是皇帝。。。。。');
    }
}