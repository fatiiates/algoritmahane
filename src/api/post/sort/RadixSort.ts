import { performance } from 'perf_hooks';
import { createSortPerformance } from '../../../constants/types/generators/Performance';

const countingSort = (array: Array<number>, k: number) => {
    let numberOfTransactions = 1;
    console.log(array);
    numberOfTransactions += 11;
    let counting = Array.from(Array(10).keys()).map(() => 0);

    numberOfTransactions += array.length;
    let output = Array.from(Array(array.length).keys()).map(() => 0);

    numberOfTransactions += array.length + 1;
    for (let j = 0; j < array.length; j++) {
        numberOfTransactions++;
        counting[Math.floor(array[j] / k ) % 10]++;
    }

    numberOfTransactions += array.length + 1;
    for (let i = 1; i < 10; i++) {
        numberOfTransactions++;
        counting[i] = counting[i] + counting[i - 1];
    }

    numberOfTransactions += array.length + 1;
    for (let j = array.length - 1; j >= 0; j--) {
        numberOfTransactions += 2;
        output[counting[Math.floor(array[j] / k ) % 10] - 1] = array[j];
        counting[Math.floor(array[j] / k ) % 10]--;
    }

    //console.log(output);
    for (let j = 0; j < array.length; j++) {
        numberOfTransactions += 1;
        array[j] = output[j];
    }

    return numberOfTransactions;
}

export const radixSort = async (array: Array<number>): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Sıralama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 2)
            return reject(new Error("Sıralama gerçekleştirilebilmesi için gönderilen dizi en az 2 sayı içermelidir."));

        let numberOfTransactions = 1;

        let start = performance.now();

        let m = Math.max(...array);

         
        for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10){
            numberOfTransactions += 2;
            numberOfTransactions += countingSort(array, exp);
        }
        numberOfTransactions++;


        let end = performance.now();
        return resolve({
            array,
            numberOfTransactions,
            performance: end - start
        });
    });

}

const performanceRadixSort = async (array: Array<number>): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        let starterArray = array.toString();
        await radixSort(array)
            .then(result => {
                resolve(createSortPerformance({
                    sortedDataset: array.toString(),
                    performance: result.performance,
                    numberOfTransactions: result.numberOfTransactions,
                    dataset: starterArray
                }));
            })
            .catch(err => reject(err));
    });

};

export default performanceRadixSort;