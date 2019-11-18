import {Human} from './human';

export class WhiteHuman implements Human {
    getColor() {
        console.log('白种人的皮肤是白色');
    }
    talk() {
        console.log('白人会说话，一般人说的是但字节');
    }
};
