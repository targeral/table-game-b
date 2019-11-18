import {IGamePlayer} from './gameplayer.interface';

export class GamePlayer implements IGamePlayer {
    private name: string = '';

    constructor(_name: string) {
        this.name = _name;
    }

    public killBoss(): void {
        console.log(`${this.name} 在打怪`);
    }

    public login(user: string, password: string): void {
        console.log(`登录名为${user}的用户，${this.name}登录成功`);
    }

    public upgrade(): void {
        console.log(`${this.name}又升了一级`);
    }
}