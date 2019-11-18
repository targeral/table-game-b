import {EmperorMuti} from './emperor-muti';

export class Minister {
    start() {
        for (let i = 0; i < 5; i++) {
            const emperor = EmperorMuti.getInstance();
            console.log(`第${i}个大臣拜见的是: ${emperor.say()}`);
        }
    }
}