import { performance } from 'perf_hooks';
import createIPerformance from '../../types/generators/Performance';
import TPerformance from '../../types/Performance';


export const linearSearch = <T extends unknown>(array: Array<T>, searched: T): number => {

    for(let i = 0; i < array.length; i++)
        if(array[i] == searched)
            return ++i;
    return -1;

};

const performanceLinearSearch = <T extends unknown>(array: Array<T>, searched: T): TPerformance => {

    console.log(array);

    let start: number = performance.now();

    const result: number = linearSearch<T>(array, searched);

    let end: number = performance.now();

    let send = createIPerformance();
    send.index = result;
    send.performance = end - start;
    
    return send;

};

export default performanceLinearSearch;
