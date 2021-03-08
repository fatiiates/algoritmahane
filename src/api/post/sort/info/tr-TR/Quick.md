# HIZLI SIRALAMA

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(n)  en iyi durum
    T(n) = | O(n^2) en kötü durum
           | O(n*log n) ortalama durum
           
Algoritmanın iteratif denklemi ise:

    T(n) = (logn - 1)*O(1) + T(1)
    
olarak ifade edilebilir.

### Hızlı Sıralama Nasıl Çalışır ?

&emsp;Algoritmaya bir dizi verildiğinde, herhangi bir sayı pivot olarak seçilir(genellikle ilk eleman). Dizide pivottan küçük olan sayıların pivottan düşük indislere, pivottan büyük olan sayıların pivottan yüksek indislerde olacak halde güncellenir. Oluşan alt ve üst diziler için hızlı sıralama algoritması tekrar çağrılır. En son olarak sıralanmış dizi geriye döndürülür.

### Sözde Kodu

    QUICKSORT(A, p, r)
      if p < r
        then 
          q = PARTITION(A, p, r)
          QUICKSORT(A, p, q-1)
          QUICKSORT(A, q+1, r)
          
    PARTIITION(A, p, r)
      x = A[r]
      i = p - 1
      j = r + 1
      while TRUE
        repeat j = j - 1
          until A[j] <= x
        repeat i = i + 1
          until A[i] >= x 
        if i < j
        then
          exchange A[i] <--> A[j]
        else
          return j
