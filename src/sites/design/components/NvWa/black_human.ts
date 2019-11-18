import {Human} from './human';

export default class BlackHuman implements Human {
    getColor() {
        console.log('黑种人的皮肤是黑色');
    }

    talk() {
        console.log('黑人会说话，一般人听不懂');
    }
}