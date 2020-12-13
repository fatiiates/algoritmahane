import { performance } from 'perf_hooks';
import { createSortPerformance } from '../../types/generators/Performance';

export const insertionSort = async (array: Array<number>): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Sıralama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 2)
            return reject(new Error("Sıralama gerçekleştirilebilmesi için gönderilen dizi en az 2 sayı içermelidir."));

        let numberOfTransactions = 1;

        let start = performance.now();
        for (let i = 1; i < array.length; i++) {
            numberOfTransactions += 2;
            let j = 0;
            while (j < i) {
                numberOfTransactions += 2;
                if (array[j] > array[i]) {
                    numberOfTransactions += 3;
                    let temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
                j++;
            }
        }
        let end = performance.now();
        numberOfTransactions++;     
        return resolve({ 
            array,
            numberOfTransactions,
            performance: end - start
        });
    });

}

const performanceInsertionSort = async (array: Array<number>, searched: number): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        let starterArray = array.toString();
        await insertionSort(array)
            .then(result => {
                resolve(createSortPerformance({
                    sortedDataset: array.toString(),
                    performance: result.performance,
                    numberOfTransactions: result.numberOfTransactions,
                    dataset: starterArray,
                    algorithmInfo: "",
                }));
            })
            .catch(err => reject(err));
    });

};

export default performanceInsertionSort;