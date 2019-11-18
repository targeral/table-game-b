export abstract class HummerModel {
    protected abstract start(): void;
    protected abstract stop(): void;
    protected abstract alarm(): void;
    protected abstract engineBoom(): void;
    public run(): void {
        this.start();
        this.alarm();
        this.engineBoom();
        this.stop();
    };
};
