# KOVA SIRALAMA

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(n)  en iyi durum
    T(n) = | O(n^2) en kötü durum
           | O(n + k) ortalama durum

### Kova Sıralama Nasıl Çalışır ?

&emsp;Algoritmaya 0 ve 1 aralığında bir sayı dizisi verildiğinde, kovalar adında bir dizi oluşturulur. Kovalar dizisinin her bir indisi bir kovadır ve bu kovalar belirli aralıklardaki sayıları tutarlar. Dizi elemanları tek tek taranarak bu kovaların içerisine yerleştirilirler. Daha sonrasında boş olmayan her kova insertion sort metodu ile sıralanır. Son olarak da sıralanmış kovaların içerisindeki elemanlar sırasıyla yeni bir diziye atılır ve geriye yeni dizi döndürülür.

### Sözde Kodu

    BUCKET_SORT(A)
      n = length(A)
      for i = 0 to n
        do insert A[i] into list B[n * A[i]]
      for i = 0 to n
        do sort B[i] with insertion sort
      concatenate the lists B[0], B[1], ..., B[n-1] together in order
