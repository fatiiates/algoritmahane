# ARAYA EKLEME SIRALAMASI(INSERTION SORT)

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(n)  en iyi durum
    T(n) = | O(n^2) en kötü durum
           | O(n^2) ortalama durum        

### Çalışma Mantığı

&emsp;Algoritmaya bir dizi verildiğinde, her dizi elemanı için şu işlemler gerçekleşir: Elemandan kendinden önceki sayılar ile karşılaştırılmaya başlanır. Karşılaştırıldığı sayıdan daha küçük ise o sayı ile yer değiştirilir. Ve sıradaki eleman için döngü dönmeye devam eder. En son olarak geriye sıralanmış dizi döndürülür.

### Sözde Kodu

    INSERTION_SORT(A, n)
      for j = 2 to n
        do k = A[j]
           i = j -1
           while i > 0 and A[i] > k
            do A[i+1] = A[i]
               i = i -1
           A[i+1] = k
      
