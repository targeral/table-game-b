import { HummerModel } from './hummer_Model';

export class HummerH2 extends HummerModel {
    /**
     * start
     */
    public start() {
        console.log('h2 start');
    }

    public alarm() {
        console.log('h2 alarm');
    }

    public engineBoom() {
        console.log('h2 engineBoom');
    }

    public stop() {
        console.log('h2 stop');
    }
};
