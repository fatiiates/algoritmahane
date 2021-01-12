
const algorithms = {
    "search": [
        {
            constraints: [
                'Verileriniz rasyonel sayılardan oluşmalıdır.',
                'Sayılar [-1000000, 1000000] aralığında olmalıdır.'
            ],
            endPoint: "search/binary",
            explain: 'Genellikle O(log n) zamanda çalışan bir arama algoritmasıdır. \
                  Sıralanmış bir dizide, ortadan ikiye bölerek dizilerin ortalarındaki sayıları karşılaştırır. \
                  Büyük, küçük hesabına göre sayının yerini tespit etmeye çalışır.',
            name: "İkili Arama",
        },
        {
            constraints: [
                'Verileriniz rasyonel sayılardan oluşmalıdır.',
                'Sayılar [-1000000, 1000000] aralığında olmalıdır.'
            ],
            endPoint: "search/linear",
            explain: 'Genellikle O(n) zamanda çalışan basit bir arama algoritmasıdır. \
                  Tüm sayılar ile doğrusal olarak aranan elemanı karşılaştırarak sonucu bulmaya çalışır.',
            name: "Doğrusal Arama"
        }
    ],
    "sort": [
        {
            constraints: [
                'Verileriniz rasyonel sayılardan oluşmalıdır.',
                'Sayılar [-1000000, 1000000] aralığında olmalıdır.'
            ],
            endPoint: "sort/bucket",
            explain: 'Genellikle O(n + k) zamanda çalışan bir sıralama algoritmasıdır. \
                  Tüm sayılar belirli aralıklarda kovalara doldurulur, daha sonra boş olmayan her kova sıralanır ve birleştirilir.',
            name: "Kova Sıralama"
        },
        {
            constraints: [
                'Verileriniz rasyonel sayılardan oluşmalıdır.',
                'Sayılar [-1000000, 1000000] aralığında olmalıdır.'
            ],
            endPoint: "sort/counting",
            explain: 'Genellikle O(n + k) zamanda çalışan bir sıralama algoritmasıdır. \
                  En büyük sayı(k) uzunluğunda bir dizi oluşturulur. Her dizi elemanı kontrol edilerek ilgili indis bir arttırılır.\
                  Sonrasında dizi sırasıyla yeni bir dizide birleştirilir.',
            name: "Sayma Sıralaması"
        },
        {
            constraints: [
                'Verileriniz rasyonel sayılardan oluşmalıdır.',
                'Sayılar [-1000000, 1000000] aralığında olmalıdır.'
            ],
            endPoint: "sort/heap",
            explain: 'Genellikle O(n*logn) zamanda çalışan bir sıralama algoritmasıdır. \
                  Dizi elemanları bir heap ağacına atılır ve elemanlar Heapify ile yığınlaştırılır. \
                  Kök düğüm alınarak sonuç dizisinin en son elemanı yapılır ve ağaç tekrar yığınlaştırılır. \
                  Ve bu düzen tüm elemanlar sonuç dizisine aktarılıncaya kadar devam eder',
            name: "Yığın Sıralaması"
        },
        {
            constraints: [
                'Verileriniz rasyonel sayılardan oluşmalıdır.',
                'Sayılar [-1000000, 1000000] aralığında olmalıdır.'
            ],
            endPoint: "sort/insertion",
            explain: 'Genellikle O(n^2) zamanda çalışan bir sıralama algoritmasıdır. \
                  Temel olarak her elemanın kendinden önceki elemanlar ile karşılaştırılması esasına dayanır. \
                  Bu karşılaştırmada eğer ki karşılaştırıldığı sayıdan küçük ise yer değiştirme işlemi gerçekleştirilir.',
            name: "Araya Ekleme Sıralaması"
        },
        {
            constraints: [
                'Verileriniz rasyonel sayılardan oluşmalıdır.',
                'Sayılar [-1000000, 1000000] aralığında olmalıdır.'
            ],
            endPoint: "sort/merge",
            explain: 'Genellikle O(n*logn) zamanda çalışan bir sıralama algoritmasıdır. \
                  Diziyi iki eşit(yaklaşık) parçaya böler. \
                  Bölünen parçalar için rekürsif bir şekilde Birleştirme sıralaması algoritması çağrılır. \
                  Kendi içerisinde sıralanan diziler sıralı bir şekilde birleştirilir.',
            name: "Birleştirme Sıralaması"
        },
        {
            constraints: [
                'Verileriniz rasyonel sayılardan oluşmalıdır.',
                'Sayılar [-1000000, 1000000] aralığında olmalıdır.'
            ],
            endPoint: "sort/quick",
            explain: 'Genellikle O(n*logn) zamanda çalışan bir sıralama algoritmasıdır. \
                  Herhangi bir sayı pivot olarak seçilir. \
                  Bu pivottan küçük sayılar pivottan düşük indislere, büyük sayılar pivottan büyük indislere yerleştirilir. \
                  Bu sayede elde edilen alt ve üst dizi kendi içerisinde hızlı sıralama algoritmasını çağırır. \
                  Algoritma sonucunda sıralanmış bir dizi elde edilir. \
                  Ek olarak literatürde çok kullanılan bir algoritma olduğu olarak tasvir edilir.',
            name: "Hızlı Sıralama"
        },
        {
            constraints: [
                'Verileriniz rasyonel sayılardan oluşmalıdır.',
                'Sayılar [-1000000, 1000000] aralığında olmalıdır.'
            ],
            endPoint: "sort/radix",
            explain: 'Genellikle O(n*k) zamanda çalışan bir sıralama algoritmasıdır. \
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
