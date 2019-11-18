import { Command } from "./Command";

export default class AddRequirementCommand extends Command {
    /**
     * execute
     */
    public execute(): void {
        super.rg.find();
        super.rg.add();
        super.rg.plan();
    }
}