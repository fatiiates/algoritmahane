import { performance } from 'perf_hooks';

export const linearSearch = <T extends unknown>(array: Array<T>, searched: T): number => {

    for(let i = 0; i < array.length; i++)
        if(array[i] == searched)
            return ++i;
    return -1;

};

const performanceLinearSearch = <T extends unknown>(array: Array<T>, searched: T): object => {

    let start: number = performance.now();

    const result: number = linearSearch<T>(array, searched);

    let end: number = performance.now();

    return {
        result: result,
        performance: end - start
    }

};

export default performanceLinearSearch;
