

export abstract class SetAbstract {
    public size?: number;
    constructor() {}

    abstract add(value: any): SetAbstract;
    abstract delete(value: any): boolean;
    abstract has(value: any): boolean;
    abstract clear(): void;
    
    abstract keys(): any;
    abstract values(): any;
    abstract entries(): any;
    abstract forEach(): any;
}
