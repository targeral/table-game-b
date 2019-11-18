import {CarModel} from './carModel';

export class BenzModel extends CarModel {
    protected alarm(): void {
        console.log('benz alarm');
    }

    protected engineBoom(): void {
        console.log('benz engine boom');
    }

    protected start(): void {
        console.log('benz start');
    }

    protected stop(): void {
        console.log('benz stop');
    }
}