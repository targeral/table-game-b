export class Boy {
    private state: string = '';
    changeState(): void {
        this.state = '心情可能不好';
    }

    getState(): string {
        return this.state;
    }

    setState(state: string): void {
        this.state = state;
    }

    createMemonto() {
    }

    restoreMemoto(_memoto: Memento) {
        this.setState();
    }
}