import {Human} from './human';

export default class YelloHuman implements Human {
    getColor() {
        console.log('黄种人的皮肤是黄色');
    }
    talk() {
        console.log('黄人会说话，一般人说的是上字节');
    }
};
