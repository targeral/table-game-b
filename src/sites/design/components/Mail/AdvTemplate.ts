export class AdvTemplate {
    private advSubject: string = 'xx银行国庆信用卡活动';
    private advContext: string = '恭喜您';

    /**
     * getAdvSubject
     */
    public getAdvSubject(): string {
        return this.advSubject;
    }

    /**
     * getAdvContext
     */
    public getAdvContext(): string {
        return this.advContext;
    }
}