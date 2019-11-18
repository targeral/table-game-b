export abstract class CarModel {
    private sequence: Symbol[] = [];

    protected abstract start(): void;
    protected abstract engineBoom(): void;
    protected abstract alarm(): void;
    protected abstract stop(): void;

    public START: Symbol = Symbol('start car');
    public STOP: Symbol = Symbol('stop car');
    public ENGINEBOOM: Symbol = Symbol('engine boom');
    public ALARM: Symbol = Symbol('alarm');
    public run(): void {
        for (let i = 0; i < this.sequence.length; i++) {
            let actionName: Symbol = this.sequence[i];
            switch (actionName) {
                case this.START:
                    this.start();
                    break;
                case this.ENGINEBOOM:
                    this.engineBoom();
                    break;
                case this.ALARM:
                    this.alarm();
                    break;
                case this.STOP:
                    this.stop();
                    break;
                default:
                    break;
            }
        }
    };
    public setSequence(sequence: Symbol[]): void {
        this.sequence = sequence;
    }
}
