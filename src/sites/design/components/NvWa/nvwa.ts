import {HumanFactory, AbstractHumanFactory} from './human_factory';
import {Human} from './human';
import {WhiteHuman} from './white_human';
import BlackHuman from './black_human';
import YelloHuman from './yellow_human';

export default class NvwWa {
    start() {
        const YinYangLu: AbstractHumanFactory = new HumanFactory();
        console.log('造白人');
        const whiteHuman: Human = YinYangLu.createHuman(WhiteHuman);
        whiteHuman.getColor();
        whiteHuman.talk();
        console.log('造黑人');
        const blackHuman: Human = YinYangLu.createHuman(BlackHuman);
        blackHuman.getColor();
        blackHuman.talk();
        console.log('造黄种人');
        const yellowHuman: Human = YinYangLu.createHuman(YelloHuman);
        yellowHuman.getColor();
        yellowHuman.talk();
    }
}