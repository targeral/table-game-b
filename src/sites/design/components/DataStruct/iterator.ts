interface $Iterable {
    [Symbol.iterator](): $Iterator;
}

interface $Iterator {
    next(value?: any): $IterationResult;
};

interface $IterationResult {
    done: boolean;
    value: any;
};