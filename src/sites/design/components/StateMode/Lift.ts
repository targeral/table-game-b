export abstract class AbstractLift {
    static OPENING_STATE: number = 1;
    static CLOSING_STATE: number = 2;
    static RUNNING_STATE: number = 3;
    static STOPPING_STATE: number = 4;

    public abstract setState(state: number): void;
    public abstract open(): void;
    public abstract close(): void;
    public abstract running(): void;
    public abstract stopping(): void;
}

export default class Lift implements AbstractLift {
    private state!: number;
    setState(state: number): void {
        this.state = state;
    }

    close(): void {
        switch (this.state) {
            case AbstractLift.OPENING_STATE:
                
                break;
        
            default:
                break;
        }
    }
}