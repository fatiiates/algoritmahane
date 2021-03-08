# BİRLEŞTİRME SIRALAMASI

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(n)  en iyi durum
    T(n) = | O(n*log n) en kötü durum
           | O(n*log n) ortalama durum
           
Algoritmanın iteratif denklemi ise:

    T(n) = 2*T(n/2) + O(n)
    
olarak ifade edilebilir.

### Birleştirme Sıralaması Nasıl Çalışır ?

&emsp;Algoritmaya bir dizi verildiğinde, diziyi eşit olarak iki alt diziye ayırır. Bu işlem alt dizilerde 1 eleman kalana kadar devam eder. Alt diziler kendi içerisinde sıralanır ve sıralanmış alt dizileri tek bir sıralı dizi olacak şekilde birleştirir. En son olarak sıralanmış dizi geriye döndürülür.

### Sözde Kodu

    MERGE_SORT(A, p, r)
      if p < r
        q = (p+r)/2
        MERGE_SORT(A, p, q)
        MERGE_SORT(A, q+1, r)
        MERGE(A, p, q, r)
      
    MERGE(A, p, q, r)
      n1 = q - p + 1
      n2 = r - q
      let L[1..n1+1] and R[1..n2+1] be new arrays
      for i = 1 to n1
        L[i] = A[p+i-1]
      for j = 1 to n2
        R[j] = A[q+j]
      L[n1+1] = NUMBER_MAX
      L[n2+1] = NUMBER_MAX
      i = 1
      j = 1
      for k = p to r
        if L[i] <= R[j]
          A[k] = L[İ]
          i = i+1
        else A[k] = R[j]
          j= j+1
