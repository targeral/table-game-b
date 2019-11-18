export interface IGamePlayer {
    login: (user: string, password: string) => void;
    killBoss: () => void;
    upgrade: () => void;
}