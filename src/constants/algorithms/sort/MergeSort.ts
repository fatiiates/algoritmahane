import { performance } from 'perf_hooks';
import { createSortPerformance } from '../../types/generators/Performance';

export const mergeSortController = async (array: Array<number>, left: number, right: number): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Sıralama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 2)
            return reject(new Error("Sıralama gerçekleştirilebilmesi için gönderilen dizi en az 2 sayı içermelidir."));
        else if (typeof left == "undefined")
            return reject(new Error("Sıralama yapılabilmesi için soldan bir başlangıç indeksi bulunamadı."));
        else if (typeof right == "undefined")
            return reject(new Error("Sıralama yapılabilmesi için sağdan sonlandırıcı indeks bulunamadı."));

        let start = performance.now();

        const numberOfTransactions = resolve(mergeSort(array, left, right));

        let end = performance.now();

        return resolve({
            array,
            numberOfTransactions,
            performance: end - start
        });
    });

}

export const mergeSort = (array: Array<number>, left: number, right: number) => {
    let numberOfTransactions = 1;

    if (left < right) {
        numberOfTransactions += 4;
        const pivot: number = Math.floor((left + right) / 2);
        numberOfTransactions += mergeSort(array, left, pivot);
        numberOfTransactions += mergeSort(array, pivot + 1, right);
        numberOfTransactions += merge(array, left, pivot, right);
    }

    return numberOfTransactions;
}

export const merge = (A: Array<number>, left: number, pivot: number, right: number) => {
    let numberOfTransactions = 4;

    const n1: number = pivot - left + 1;
    const n2: number = right - pivot;
    let L: Array<number> = Array(n1);
    let R: Array<number> = Array(n2);

    numberOfTransactions += n1 + 1;
    for (let i = 0; i < n1; i++) {
        numberOfTransactions += 1;
        L[i] = A[left + i - 1];
    }
    numberOfTransactions += n1 + 1;
    for (let j = 0; j < n1; j++){
        numberOfTransactions += 1;
        R[j] = A[pivot + j];
    }

    numberOfTransactions += 4;
    L[n1] = Number.MAX_SAFE_INTEGER;
    R[n2] = Number.MAX_SAFE_INTEGER;
    let i: number = 1;
    let j: number = 1;

    numberOfTransactions += right - left;
    for (let k = left; k < right; k++) {
        numberOfTransactions += 2;
        if (L[i] <= R[j]) {
            numberOfTransactions++;
            A[k] = L[i];
            i++;
        }
        else {
            numberOfTransactions += 2;
            A[k] = L[j];
            j++;
        }
    }

    return numberOfTransactions;
}


const performanceMergeSort = async (array: Array<number>): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        let start: number = performance.now();
        let starterArray = array.toString();
        await mergeSortController(array, 0, array.length)
            .then(result => {
                let end = performance.now();
                resolve(createSortPerformance({
                    sortedDataset: array.toString(),
                    performance: end - start,
                    numberOfTransactions: result.numberOfTransactions,
                    dataset: starterArray,
                    algorithmInfo: "",
                }));
            })
            .catch(err => reject(err));
    });

};

export default performanceMergeSort;