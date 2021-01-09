
const algorithms = {
    "search": [
        {
            endPoint: "search/binary",
            name: "İkili Arama"
        },
        {
            endPoint: "search/linear",
            name: "Doğrusal Arama"
        }
    ],
    "sort": [
        {
            endPoint: "sort/bucket",
            name: "Kova Sıralama"
        },
        {
            endPoint: "sort/counting",
            name: "Sayma Sıralaması"
        },
        {
            endPoint: "sort/heap",
            name: "Yığın Sıralaması"
        },
        {
            endPoint: "sort/insertion",
            name: "Araya Ekleme Sıralaması"
        },
        {
            endPoint: "sort/merge",
            name: "Birleştirme Sıralaması"
        },
        {
            endPoint: "sort/quick",
            name: "Hızlı Sıralama"
        },
        {
            endPoint: "sort/radix",
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
