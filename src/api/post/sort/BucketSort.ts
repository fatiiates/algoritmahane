import { performance } from 'perf_hooks';
import { createSortPerformance } from '@constants/types/generators/Performance';

const insertionSort = (dizi: Array<number>, n: number) => {
    let numberOfTransactions = 1;

    let i, j;
    numberOfTransactions += n;
    for (i = 1; i < n; i++) {
        numberOfTransactions += 3
        let temp = dizi[i];
        for (j = i - 1; j >= 0 && dizi[j] > temp; j--) {
            numberOfTransactions += 1
            dizi[j + 1] = dizi[j];
        }
        dizi[j + 1] = temp;
    }
    return numberOfTransactions;
}

export const bucketSort = async (array: Array<number>): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Sıralama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 2)
            return reject(new Error("Sıralama gerçekleştirilebilmesi için gönderilen dizi en az 2 sayı içermelidir."));

        let numberOfTransactions = 4;

        let start = performance.now();

        let i,
            minValue = array[0],
            maxValue = array[0],
            bucketSize = 5;
        array.forEach(function (currentVal) {
            numberOfTransactions += 2;
            if (currentVal < minValue) {
                minValue = currentVal;
            } else if (currentVal > maxValue) {
                numberOfTransactions += 1;
                maxValue = currentVal;
            }
        })
        numberOfTransactions += 2;
        let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
        let allBuckets = new Array(bucketCount);
        numberOfTransactions += allBuckets.length;
        for (i = 0; i < allBuckets.length; i++) {
            numberOfTransactions += 1;
            allBuckets[i] = [];
        }
        array.forEach(function (currentVal) {
            numberOfTransactions += 1;
            allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
        });
        array.length = 0;
        allBuckets.forEach(function (bucket) {
            numberOfTransactions += insertionSort(bucket, bucket.length);
            bucket.forEach(function (element) {
                numberOfTransactions += 1;
                array.push(element)
            });
        });

        let end = performance.now();
        return resolve({
            array,
            numberOfTransactions,
            performance: end - start
        });
    });

}


const performanceBucketSort = async (array: Array<number>): Promise<any> => {
    let starterArray = array.toString();
    return new Promise(async function (resolve, reject) {
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