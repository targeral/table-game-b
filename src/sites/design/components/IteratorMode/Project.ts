import ProjectIterator, {IProjectIterator} from './ProjectIterator';

export interface IProject {
    add: (name: string, num: number, cost: number) => void;
    getProjectInfo: () => string;
    iterator: () => IProjectIterator;
}

export default class Project implements IProject {
    private projectList: IProject[] = [];
    private name: string = '';
    private num: number = 0;
    private cost: number = 0;
    
    constructor(name?: string, num?: number, cost?: number) {
        this.name = name || '';
        this.num = num || 0;
        this.cost = cost || 0;
    }

    /**
     * add 
     */
    public add(name: string, num: number, cost: number): void {
        this.projectList.push(new Project(name, num, cost));
    }

    /**
     * getProject
     */
    public getProjectInfo(): string {
        return `
            项目名称是：${this.name}
            项目人数是：${this.num}
            项目费用是：${this.cost}
        `
    }

    iterator() {
        return new ProjectIterator(this.projectList);
    }
}