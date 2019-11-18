import Project, { IProject } from "./Project";
import { IProjectIterator } from "./ProjectIterator";

export class Boss {
    constructor() {
        const project: IProject = new Project();
        project.add('星球大战项目', 10, 1000);
        project.add('星球大战项目1', 11, 1001);
        project.add('星球大战项目2', 12, 1002);

        for(let i: number = 4; i < 104; i++) {
            project.add(`第${i}个项目`, i * 5, i * 10000);
        }
        console.log(project)

        const projectIterator: IProjectIterator = project.iterator();
        for(let p of projectIterator) {
            console.log(p);
        }
    }
}