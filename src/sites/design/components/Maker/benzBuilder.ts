import {CarBuilder} from './carBuilder';
import {BenzModel} from './benzModel';
import {CarModel} from './carModel';

export class BenzBuilder extends CarBuilder {
    private benz: BenzModel = new BenzModel();
    public setSequence(sequence: Symbol[]) {
        this.benz.setSequence(sequence);
    }
    public getCarModel(): CarModel {
        return this.benz;
    }
}