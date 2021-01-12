
const algorithms = {
    "search": [
        {
            contrainsts: ['Verileriniz rasyonel sayılardan oluşmalıdır.', [-1000000, 1000000]],
            endPoint: "search/binary",
            info: 'Genellikle O(log n) zamanda çalışan bir arama algoritmasıdır. \
                  Sıralanmış bir dizide, ortadan ikiye bölerek dizilerin ortalarındaki sayıları karşılaştırır. \
                  Büyük, küçük hesabına göre sayının yerini tespit etmeye çalışır.',
            name: "İkili Arama",
        },
        {
            contrainsts: ['Verileriniz rasyonel sayılardan oluşmalıdır.', [-1000000, 1000000]],
            endPoint: "search/linear",
            info: 'Genellikle O(n) zamanda çalışan basit bir arama algoritmasıdır. \
                  Tüm sayılar ile doğrusal olarak aranan elemanı karşılaştırarak sonucu bulmaya çalışır.',
            name: "Doğrusal Arama"
        }
    ],
    "sort": [
        {
            contrainsts: ['Verileriniz rasyonel sayılardan oluşmalıdır.', [-1000000, 1000000]],
            endPoint: "sort/bucket",
            info: 'Genellikle O(n + k) zamanda çalışan bir sıralama algoritmasıdır. \
                  Tüm sayılar belirli aralıklarda kovalara doldurulur, daha sonra boş olmayan her kova sıralanır ve birleştirilir.',
            name: "Kova Sıralama"
        },
        {
            contrainsts: ['Verileriniz rasyonel sayılardan oluşmalıdır.', [-1000000, 1000000]],
            endPoint: "sort/counting",
            info: 'Genellikle O(n + k) zamanda çalışan bir sıralama algoritmasıdır. \
                  En büyük sayı(k) uzunluğunda bir dizi oluşturulur. Her dizi elemanı kontrol edilerek ilgili indis bir arttırılır.\
                  Sonrasında dizi sırasıyla yeni bir dizide birleştirilir.',
            name: "Sayma Sıralaması"
        },
        {
            contrainsts: ['Verileriniz rasyonel sayılardan oluşmalıdır.', [-1000000, 1000000]],
            endPoint: "sort/heap",
            info: 'Genellikle O(n*logn) zamanda çalışan bir sıralama algoritmasıdır. \
                  Dizi elemanları bir heap ağacına atılır ve elemanlar Heapify ile yığınlaştırılır. \
                  Kök düğüm alınarak sonuç dizisinin en son elemanı yapılır ve ağaç tekrar yığınlaştırılır. \
                  Ve bu düzen tüm elemanlar sonuç dizisine aktarılıncaya kadar devam eder',
            name: "Yığın Sıralaması"
        },
        {
            contrainsts: ['Verileriniz rasyonel sayılardan oluşmalıdır.', [-1000000, 1000000]],
            endPoint: "sort/insertion",
            info: 'Genellikle O(n^2) zamanda çalışan bir sıralama algoritmasıdır. \
                  Temel olarak her elemanın kendinden önceki elemanlar ile karşılaştırılması esasına dayanır. \
                  Bu karşılaştırmada eğer ki karşılaştırıldığı sayıdan küçük ise yer değiştirme işlemi gerçekleştirilir.',
            name: "Araya Ekleme Sıralaması"
        },
        {
            contrainsts: ['Verileriniz rasyonel sayılardan oluşmalıdır.', [-1000000, 1000000]],
            endPoint: "sort/merge",
            info: 'Genellikle O(n*logn) zamanda çalışan bir sıralama algoritmasıdır. \
                  Diziyi iki eşit(yaklaşık) parçaya böler. \
                  Bölünen parçalar için rekürsif bir şekilde Birleştirme sıralaması algoritması çağrılır. \
                  Kendi içerisinde sıralanan diziler sıralı bir şekilde birleştirilir.',
            name: "Birleştirme Sıralaması"
        },
        {
            contrainsts: ['Verileriniz rasyonel sayılardan oluşmalıdır.', [-1000000, 1000000]],
            endPoint: "sort/quick",
            info: 'Genellikle O(n*logn) zamanda çalışan bir sıralama algoritmasıdır. \
                  Herhangi bir sayı pivot olarak seçilir. \
                  Bu pivottan küçük sayılar pivottan düşük indislere, büyük sayılar pivottan büyük indislere yerleştirilir. \
                  Bu sayede elde edilen alt ve üst dizi kendi içerisinde hızlı sıralama algoritmasını çağırır. \
                  Algoritma sonucunda sıralanmış bir dizi elde edilir. \
                  Ek olarak literatürde çok kullanılan bir algoritma olduğu olarak tasvir edilir.',
            name: "Hızlı Sıralama"
        },
        {
            contrainsts: ['Verileriniz rasyonel sayılardan oluşmalıdır.', [-1000000, 1000000]],
            endPoint: "sort/radix",
            info: 'Genellikle O(n*k) zamanda çalışan bir sıralama algoritmasıdır. \
                  Temel olarak sayma sıralaması veya kova sıralama algoritmalarına dayanır. \
                  En küçük değerlikli basamaktan başlayarak her basamak için dizi elemanlarını sıralar.',
            name: "Taban Sıralaması"
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
