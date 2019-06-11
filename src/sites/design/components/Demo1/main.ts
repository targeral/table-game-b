/* eslint-disable */
export class Girl {

}

export class GroupLeader {
    private listGirls: Girl[];

    constructor(_listGirls: Girl[]) {
        this.listGirls = _listGirls;
    }

    public countGirls(): void {
        console.log("女生人数是：" + this.listGirls.length);
    }
}

export class Tearcher {
    public commond(groupLeader: GroupLeader): void {
        groupLeader.countGirls();
    }
}

export class Client {
    public start(): void {
        const listGrils: Girl[] = [];

        for(let i = 0; i < 20; i++) {
            listGrils.push(new Girl());
        }

        const teacher: Tearcher = new Tearcher();
        teacher.commond(new GroupLeader(listGrils));
    }
}