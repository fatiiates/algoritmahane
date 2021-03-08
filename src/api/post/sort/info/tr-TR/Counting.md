# SAYMA SIRALAMASI

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(n + k) en iyi durum
    T(n) = | O(n + k) en kötü durum
           | O(n + k) ortalama durum

### Sayma Sıralaması Nasıl Çalışır ?

&emsp;Algoritmaya bir dizi verildiğinde, verilerin 0 ile k arasında olduğu kabul edilir. K boyutunda bir dizi tanımlanır ve bize verilen dizinin her elemanı taranmaya başlar. Taranan her eleman için k boyutunda ifade ettiği alan bir arttırılır. Daha sonra tanımlanan dizi içerisindeki boş olmayan indisler sırasıyla yeni bir diziye aktarılır. Son durumda geriye yeni dizi döndürülür.

### Sözde Kodu

    COUNTING_SORT(A, k)
      for i = 1 to k
        do C[i] = 0
      for j = 1 to n
        do C[A[j]] = C[A[j]] + 1
      for i = 2 to k
        do C[i] = C[i] + C[i-1]
      for j = n down to 1
        do B[C[A[j]]] = A[j]
           C[A[j]] = C[A[j]] - 1
      
