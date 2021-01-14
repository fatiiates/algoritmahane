import { performance } from 'perf_hooks';
import { createSortPerformance } from '../../../constants/types/generators/Performance';

const insertionSort = (dizi: Array<number>, n: number) => {
    let numberOfTransactions = 0;

    numberOfTransactions += n;
    for (let i = 1; i < n; i++) {

        numberOfTransactions += 1;
        let j = 0;
        numberOfTransactions += i + 1;
        while (j < i) {
            numberOfTransactions += 2;
            if (dizi[j] > dizi[i]) {
                numberOfTransactions += 3;
                const temp = dizi[j];
                dizi[j] = dizi[i];
                dizi[i] = temp;
            }
            j++;
        }
    }
    numberOfTransactions++;
    return numberOfTransactions;
}

export const bucketSort = async (array: Array<number>): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Sıralama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 2)
            return reject(new Error("Sıralama gerçekleştirilebilmesi için gönderilen dizi en az 2 sayı içermelidir."));

        let numberOfTransactions = 1;

        let start = performance.now();

        numberOfTransactions += array.length + 1;
        let bucket = new Array<number[]>(array.length);

        numberOfTransactions += array.length + 1;
        for (let i = 0; i < array.length; i++) {
            numberOfTransactions += 1;
            bucket[i] = new Array<number>();
        }

        numberOfTransactions += array.length + 1;
        for (let j = 0; j < array.length; j++) {
            numberOfTransactions += 1;
            bucket[Math.floor(array[j]) * array.length].push(array[j]);
        }

        numberOfTransactions += array.length + 1;
        for (let i = 0; i < array.length; i++) {
            numberOfTransactions += 1;
            numberOfTransactions += insertionSort(bucket[i], bucket[i].length);
        }

        numberOfTransactions += array.length + 2;
        let index = 0;
        for (let i = 0; i < array.length; i++) {
            numberOfTransactions += bucket[i].length + 1;
            for (let j = 0; j < bucket[i].length; j++) {
                numberOfTransactions += 1;
                array[index++] = bucket[i][j];
            }
        }

        let end = performance.now();
        return resolve({
            array,
            numberOfTransactions,
            performance: end - start
        });
    });

}

const performanceBucketSort = async (array: Array<number>): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        let starterArray = array.toString();
        await bucketSort(array)
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

export default performanceBucketSort;