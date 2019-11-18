import {AdvTemplate} from './AdvTemplate';

export class Mail {
    private receiver?: string;
    private subject: string;
    private appellation?: string;
    private context: string;
    private tail?: string;

    constructor(advTemplate: AdvTemplate) {
        this.context = advTemplate.getAdvContext();
        this.subject = advTemplate.getAdvSubject();
    }

    
}