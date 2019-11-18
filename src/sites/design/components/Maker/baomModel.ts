import { CarModel } from './carModel';

export class BaomModel extends CarModel {
    protected alarm(): void {
        console.log('baoma alarm');
    }

    protected engineBoom(): void {
        console.log('baoma engine boom');
    }

    protected start(): void {
        console.log('baoma start');
    }

    protected stop(): void {
        console.log('baoma stop');
    }
}