import { performance } from 'perf_hooks';
import { createSortPerformance } from '../../../constants/types/generators/Performance';

export const countingSort = async (array: Array<number>, k: number): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Sıralama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 2)
            return reject(new Error("Sıralama gerçekleştirilebilmesi için gönderilen dizi en az 2 sayı içermelidir."));

        let numberOfTransactions = 1;

        let start = performance.now();

        numberOfTransactions += k + 1;
        let counting = Array.from(Array(k + 1).keys()).map(() => 0);

        numberOfTransactions += array.length;
        let output = Array.from(Array(array.length).keys()).map(() => 0);

        numberOfTransactions += array.length + 1;
        for (let j = 0; j < array.length; j++){
            numberOfTransactions++;
            counting[array[j]] = counting[array[j]] + 1;
        }

        numberOfTransactions += array.length + 1;
        for (let i = 1; i <= k; i++){
            numberOfTransactions++;
            counting[i] = counting[i] + counting[i - 1];
        }

        numberOfTransactions += array.length + 1;
        for (let j = array.length - 1; j >= 0; j--) {
            numberOfTransactions += 2;
            output[counting[array[j]] - 1] = array[j];
            counting[array[j]] = counting[array[j]] - 1;
        }

        let end = performance.now();
        return resolve({
            array,
            numberOfTransactions,
            performance: end - start
        });
    });

}

const performanceCountingSort = async (array: Array<number>): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        let starterArray = array.toString();
        await countingSort(array, Math.max(...array))
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

export default performanceCountingSort;