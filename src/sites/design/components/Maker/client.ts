import {BenzModel} from './benzModel';

export class Client {
    constructor() {
        const benz: BenzModel = new BenzModel();
        const sequence: Symbol[] = [];
        sequence.push(benz.START);
        sequence.push(benz.ENGINEBOOM);
        sequence.push(benz.STOP);
        benz.setSequence(sequence);
        benz.run();
    }
}