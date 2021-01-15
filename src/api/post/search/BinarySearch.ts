import { performance } from 'perf_hooks';
import { createSearchPerformance } from '../../../constants/types/generators/Performance';

export const binarySearch = async (array: Array<number>, searched: number): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Arama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 1)
            return reject(new Error("Arama gerçekleştirilebilmesi için gönderilen dizi en az 1 sayı içermelidir."));
        else if (typeof searched == 'undefined')
            return reject(new Error("Dizi içerisinde aranacak bir eleman bulunamadı."));

        let numberOfTransactions = 1;
        let start = performance.now();
        array.sort(function (a, b) {
            return a - b;
        });
        
        numberOfTransactions++;
        let alt: number = 0,
            orta: number = 0,
            ust: number = array.length;

        while (ust >= alt) {
            numberOfTransactions += 2;
            orta = Math.floor((alt + ust) / 2);
            numberOfTransactions += 3;
            if (array[orta] == searched) {
                
                let end = performance.now();
                numberOfTransactions -= 1;
                return resolve({
                    index: orta+1,
                    numberOfTransactions,
                    performance: end - start
                });
            }
            else if (searched < array[orta])
                ust = orta - 1;
            else {
                numberOfTransactions++;
                alt = orta + 1;
            }
        }
        let end = performance.now();
        numberOfTransactions += 2;     
        return resolve({ 
            index: -1, 
            numberOfTransactions,
            performance: end - start
        });
    });

}

const performanceBinarySearch = async (array: Array<number>, searched: number): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        await binarySearch(array, searched)
            .then(result => {
                resolve(createSearchPerformance({
                    index: result.index,
                    performance: result.performance,
                    numberOfTransactions: result.numberOfTransactions,
                    dataset: array.toString()
                }));
            })
            .catch(err => reject(err));
    });

};

export default performanceBinarySearch;