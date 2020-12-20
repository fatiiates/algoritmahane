import { performance } from 'perf_hooks';
import { createSortPerformance } from '../../types/generators/Performance';

class HeapSort {
    heapSize: number;
    numberOfTransactions: number;
    constructor(array: Array<any>){
        this.heapSize = 0;
        this.numberOfTransactions = 0;
        this.heapSort(array, array.length);
    }

    public getNumberOfTransactions(){
        return this.numberOfTransactions;
    }

    private setHeapSize(length: number) {
        this.numberOfTransactions++;
        this.heapSize = length;   
    }

    private getHeapSize() {
        this.numberOfTransactions++;
        return this.heapSize;
    }

    private heapify(array: Array<any>, i = 0) {
        this.numberOfTransactions += 6;
        let largest = i; 
        let l = 2 * i ; 
        let r = 2 * i + 1; 
    
        if (l < this.getHeapSize() && array[l] > array[largest]){
            this.numberOfTransactions++;
            largest = l;
        }
    

        if (r < this.getHeapSize() && array[r] > array[largest]){
            this.numberOfTransactions++;
            largest = r;
        }
        if (largest != i) {
            this.numberOfTransactions += 2;
            this.swap(array, i, largest);
            this.heapify(array, largest);
        }
    
    };
    
    private heapSort(array: Array<any>, n){
        this.numberOfTransactions += 1;
        this.buildHeap(array);
        this.numberOfTransactions += array.length + 1;
        for (let i = array.length - 1; i > 0; i--){
            this.numberOfTransactions += 3;
            this.swap(array, 0 ,i);
            this.setHeapSize(this.getHeapSize() - 1);
            this.heapify(array);
        } 
    };
    
    private buildHeap(array: Array<number>) {
        this.numberOfTransactions += 1;
        this.setHeapSize(array.length);
        this.numberOfTransactions += Math.floor(array.length / 2) + 1;
        for (let i = Math.floor(array.length / 2) ; i >= 0; i--) {
            this.numberOfTransactions += 1;
            this.heapify(array, i);
        }
    };

    private swap(array: Array<number>, x: number, y: number){
        this.numberOfTransactions += 3;
        const temp = array[x];
        array[x] = array[y];
        array[y] = temp;
    }
    
}

export const createHeapSort = async (array: Array<number>): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Sıralama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 2)
            return reject(new Error("Sıralama gerçekleştirilebilmesi için gönderilen dizi en az 2 sayı içermelidir."));

        let numberOfTransactions = 1;

        let start = performance.now();

        const testHeapSort = new HeapSort(array);

        let end = performance.now();
        numberOfTransactions += 2;     
        return resolve({ 
            array,
            numberOfTransactions:testHeapSort.getNumberOfTransactions(),
            performance: end - start
        });
    });

}

const performanceHeapSort = async (array: Array<number>, searched: number): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        let starterArray = array.toString();
        await createHeapSort(array)
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

export default performanceHeapSort;