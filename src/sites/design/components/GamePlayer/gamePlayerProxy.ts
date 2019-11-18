import {IGamePlayer} from './gameplayer.interface';
import {IProxy} from './proxy.interface';

export class GamePlayerProxy implements IGamePlayer, IProxy {
    private gamePlayer: IGamePlayer;
    constructor(_gamePlayer: IGamePlayer) {
        this.gamePlayer = _gamePlayer;
    }

    public killBoss() {
        this.gamePlayer.killBoss();
    }

    public login(user: string, password: string) {
        this.gamePlayer.login(user, password);
    }

    public upgrade() {
        this.gamePlayer.upgrade();
    }

    public count() {
        console.log('收费');
    }
}
