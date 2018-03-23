export function iqTest(numbers: string): number {
    let values = numbers.split(" ").map(Number);
    let oddOne = -1;
    for (let i = (values.length - 1); i > 0; i--) {
        if (isEven(values[i]) !== isEven(values[i - 1])) {
            oddOne = i;
            if (i === (values.length - 1) && (isEven(values[i - 1]) === isEven(values[i - 2]))) {
                oddOne = values.length;
            }
            break;
        }
    }
    return oddOne;
}

const isEven = (value: number): boolean => {
    return (value % 2 === 0) ? true : false;
}

export function iqTestCool(numbers: string): number {
    let evenness: number[] = numbers.split(' ').map(x => Number(x) % 2);
    return evenness.reduce((a, b) => a + b) == 1 ? evenness.indexOf(1) + 1 : evenness.indexOf(0) + 1;
}