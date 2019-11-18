import {CarModel} from './carModel';

export abstract class CarBuilder {
    public abstract setSequence(sequence: Symbol[]): void;
    public abstract getCarModel(): CarModel;
}