# HIZLI SIRALAMA(QUICK SORT)

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(n*logn)  en iyi durum
    T(n) = | O(n^2) en kötü durum
           | O(n*log n) ortalama durum
           
Algoritmanın iteratif denklemi ise:

    T(n) = (logn - 1)*O(1) + T(1)
    
olarak ifade edilebilir.

### Çalışma Mantığı

&emsp;Algoritmaya sıralanmış bir dizi ve aranacak eleman verildiğinde, dizinin ortasnda bulunan sayı ile aranan sayıyı karşılaştırılır ve bu işlem sayı bulunana kadar veya eldeki dizide bir ifade kalmayana kadar devam eder. Algoritma sonucunda örnek olarak aranan eleman bulunamadıysa geriye -1, aranan eleman bulunduysa dizideki indisi döndürülerek sonlandırılır.

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
