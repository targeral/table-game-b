import {IProject} from './Project';

export interface IProjectIterator {
    first(): void;
    isDone(): boolean;
    next(): IProject;
    [Symbol.iterator](): IterableIterator<IProject>;
}

export default class ProjectIterator implements IProjectIterator {
    private projectList: IProject[] = [];
    private currentItem: number = 0;
    constructor(projectList: IProject[]) {
        this.projectList = projectList;
    }

    first() {
        return this.projectList[0];
    }

    isDone(): boolean {
        let b: boolean = true;
        if (this.currentItem >= this.projectList.length || this.projectList[this.currentItem] === undefined) {
            b = false;
        }
        return b;
    }

    next(): IProject {
        return this.projectList[this.currentItem++];
    }

    * [Symbol.iterator](): IterableIterator<IProject> {
        while (this.isDone()) {
            yield this.next();
        }
    }
}