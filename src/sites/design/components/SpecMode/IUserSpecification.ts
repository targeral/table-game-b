import {User} from './User';

export interface IUserSpecification {
    isSatisfiedBy: (user: User) => boolean;
}


export class UserByNameEqual implements IUserSpecification {
    private name: string;
    constructor(_name: string) {
        this.name = _name;
    }

    public isSatisfiedBy(user: User) {
        return user.getName === name;
    }
}

