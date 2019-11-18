import RequirementGroup from './RequirementGroup';
import PageGroup from './PageGroup';
import CodeGroup from './CodeGroup';

export abstract class Command {
    protected rg: RequirementGroup = new RequirementGroup();
    protected pg: PageGroup = new PageGroup();
    protected cg: CodeGroup = new CodeGroup();
    public abstract execute(): void;
}