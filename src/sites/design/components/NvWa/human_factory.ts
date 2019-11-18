import {Human} from './human';

export abstract class AbstractHumanFactory {
    abstract createHuman<T extends Human>(c: {new(): T;}): T;
};

export class HumanFactory extends AbstractHumanFactory {
    public createHuman<T extends Human>(c: {new(): T;}): T {
        return new c();
    }
}