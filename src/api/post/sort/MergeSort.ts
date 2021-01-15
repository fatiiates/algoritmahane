import { performance } from 'perf_hooks';
import { createSortPerformance } from '../../../constants/types/generators/Performance';

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
        
        const numberOfTransactions = mergeSort(array, left, right);

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
        const pivot: number = Math.floor((left + right - 1) / 2);
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
        L[i] = A[left + i];
    }
    numberOfTransactions += n2 + 1;
    for (let j = 0; j < n2; j++){
        numberOfTransactions += 1;
        R[j] = A[pivot + j + 1];
    }

    numberOfTransactions += 4;
    let i: number = 0;
    let j: number = 0;
    let k: number = left;
    
    numberOfTransactions += 1;
    while (i < n1 && j < n2) {
        numberOfTransactions += 4;
        if (L[i] <= R[j]) {
            numberOfTransactions += 1;
            A[k] = L[i];
            i++;
        }
        else {
            numberOfTransactions += 2;
            A[k] = R[j];
            j++;
        }
        k++;
    }

    numberOfTransactions += 1;
    while (i < n1) {
        numberOfTransactions += 4;
        A[k] = L[i];
        i++;
        k++;
    }
    numberOfTransactions += 1;
    while (j < n2) {
        numberOfTransactions += 4;
        A[k] = R[j];
        j++;
        k++;
    }

    return numberOfTransactions;
}


const performanceMergeSort = async (array: Array<number>): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        let start: number = performance.now();
        let starterArray = array.toString();
        
        await mergeSortController(array, 0, array.length - 1)
            .then(result => {
                let end = performance.now();
                
                resolve(createSortPerformance({
                    sortedDataset: array.toString(),
                    performance: end - start,
                    numberOfTransactions: result.numberOfTransactions,
                    dataset: starterArray
                }));
            })
            .catch(err => reject(err));
    });

};

export default performanceMergeSort;