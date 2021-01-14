import { performance } from 'perf_hooks';
import { createSortPerformance } from '../../../constants/types/generators/Performance';

export class QuickSort {
    numberOfTransactions: number;
    constructor(array: Array<number>) {
        this.numberOfTransactions = 1;
        this.quickSort(array, 0, array.length);
    }

    public getNumberOfTransactions(){
        return this.numberOfTransactions;
    }

    private quickSort(array: Array<any>, pivot: number, right: number) {
        this.numberOfTransactions += 1;
        if (pivot < right) {
            this.numberOfTransactions += 3;
            const q = this.partition(array, pivot, right);
            this.quickSort(array, pivot, q);
            this.quickSort(array, q + 1, right);
        }
    }

    private partition(array: Array<any>, pivot: number, q: number) {
        this.numberOfTransactions += 2;

        const x = array[pivot];
        var i = pivot;

        this.numberOfTransactions += q - pivot;
        for (let j = pivot + 1; j < q; j++) {
            this.numberOfTransactions++;
            if (array[j] < x) {
                this.numberOfTransactions++;
                this.exchange(array, ++i, j);
            }
        }

        this.numberOfTransactions += 2;
        this.exchange(array, pivot, i);
        return i;
    }
    private exchange(array: Array<any>, x: number, y: number) {
        this.numberOfTransactions += 3;

        const temp = array[x];
        array[x] = array[y];
        array[y] = temp;
    }
}

export const createQuickSort = async (array: Array<number>): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Sıralama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 2)
            return reject(new Error("Sıralama gerçekleştirilebilmesi için gönderilen dizi en az 2 sayı içermelidir."));

        let numberOfTransactions = 1;

        let start = performance.now();

        const testHeapSort = new QuickSort(array);

        let end = performance.now();
        numberOfTransactions += 2;     
        return resolve({ 
            array,
            numberOfTransactions:testHeapSort.getNumberOfTransactions(),
            performance: end - start
        });
    });

}

const performanceInsertionSort = async (array: Array<number>): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        let starterArray = array.toString();
        await createQuickSort(array)
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

export default performanceInsertionSort;