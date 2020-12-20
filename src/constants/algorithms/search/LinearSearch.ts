import { performance } from 'perf_hooks';
import { createSearchPerformance } from '../../types/generators/Performance';


export const linearSearch = async (array: Array<number>, searched: number): Promise<any> => {

    return new Promise(function (resolve, reject) {
        if (typeof array == 'undefined')
            return reject(new Error("Arama yapılabilecek bir dizi bulunamadı."));
        else if (array.length < 1)
            return reject(new Error("Arama gerçekleştirilebilmesi için gönderilen dizi en az 1 sayı içermelidir."));
        else if (typeof searched == 'undefined')
            return reject(new Error("Dizi içerisinde aranacak bir eleman bulunamadı."));

        let numberOfTransactions = 0;
        let start: number = performance.now();
        
        numberOfTransactions += array.length + 1;
        for (let i = 0; i < array.length; i++) {
            numberOfTransactions += 1;
            if (array[i] == searched) {
                numberOfTransactions++;
                return resolve({ index: ++i, numberOfTransactions });
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

};

const performanceLinearSearch = async (array: Array<number>, searched: number): Promise<any> => {

    return new Promise(async function (resolve, reject) {
        

        await linearSearch(array, searched)
            .then(result => {
                
                resolve(createSearchPerformance({
                    index: result.index,
                    performance: result.performance,
                    numberOfTransactions: result.numberOfTransactions,
                    dataset: array.toString(),
                    algorithmInfo: "",
                }));
            })
            .catch(err => reject(err));
    });

};

export default performanceLinearSearch;
