const forFn = (initV: number, maxV: number, increment: number) => (fn: (index: number) => any) => {
    let arr: any[] = [];
    for(let i = initV; i < maxV; i += increment) {
        arr.push(fn(i));
    }
    console.log(arr);
    return arr;
};

const test = () => {
    console.log('ts');
    return 1;
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

export class EmperorMuti {
    private static maxNumOfEmeror: number = 2;
    private static nameList: string[] = [];
    private static emperorList: EmperorMuti[] = [];
    private static countNumOfEmperor = 0;
    private static a = test();

    emperorList = forFn(0, EmperorMuti.maxNumOfEmeror, 1)((i) => {
        console.log('adsfadf')
        return new EmperorMuti(`皇${i + 1}帝`);
    });

    private constructor(name: string) {
        EmperorMuti.nameList.push(name);
    }

    public static getInstance(): EmperorMuti {
        EmperorMuti.countNumOfEmperor = getRandomInt(EmperorMuti.maxNumOfEmeror);
        return EmperorMuti.emperorList[EmperorMuti.countNumOfEmperor];
    }

    public say() {
        console.log(EmperorMuti.nameList[EmperorMuti.countNumOfEmperor]);
    }
}