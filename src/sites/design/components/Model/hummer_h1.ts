import {HummerModel} from './hummer_Model';

export class HummerH1 extends HummerModel {
    /**
     * start
     */
    public start() {
        console.log('h1 start');
    }

    public alarm() {
        console.log('h1 alarm');
    }

    public engineBoom() {
        console.log('h1 engineBoom');
    }

    public stop() {
        console.log('h1 stop');
    }
};
