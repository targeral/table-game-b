import {User} from './User';
import {IUserSpecification} from './IUserSpecification';

export interface IUserProvider {
    findUser: (userSpec: IUserSpecification) => User[];
}

export class UserProvider implements IUserProvider {
    private userList: User[];
    constructor (_userList: User[]) {
        this.userList =_userList;
    }

    public findUser(userSpec: IUserSpecification): User[] {
        const result: User[] = [];
        for (let u of this.userList) {
            if (userSpec.isSatisfiedBy(u)) {
                result.push(u);
            }
        }
        return result;
    }

    public findUserByAgeThan(age: number): User[] {
        const result: User[] = [];
        for (let u of this.userList) {
            if (u.getAge() > age) {
                result.push(u);
            }
        }
        return result;
    }
};