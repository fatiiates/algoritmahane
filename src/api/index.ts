
const algorithms = {
    "search": [
        {
            endPoint: "binarySearch",
            name: "İkili Arama"
        },
        {
            endPoint: "linearSearch",
            name: "Doğrusal Arama"
        }
    ],
    "sort": [
        {
            endPoint: "bucketSort",
            name: "Kova Sıralama"
        },
        {
            endPoint: "countingSort",
            name: "Sayma Sıralaması"
        },
        {
            endPoint: "heapSort",
            name: "Yığın Sıralaması"
        },
        {
            endPoint: "insertionSort",
            name: "Araya Ekleme Sıralaması"
        },
        {
            endPoint: "mergeSort",
            name: "Birleştirme Sıralaması"
        },
        {
            endPoint: "quickSort",
            name: "Hızlı Sıralama"
        },
        {
            endPoint: "radixSort",
            name: "Kök Sıralaması"
        }
    ]
}

export default async () => {
    return algorithms;
}

export const getSearchAlgorithms = async () => {
    return algorithms.search;
}

export const getSortAlgorithms = async () => {
    return algorithms.sort;
}
