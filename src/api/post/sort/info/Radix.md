# TABAN SIRALAMASI(RADIX SORT)

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(n)  en iyi durum
    T(n) = | O(n*exp) en kötü durum
           | O(n*exp) ortalama durum

### Çalışma Mantığı

&emsp;Algoritmaya bir dizi verildiğinde, elemanları en düşük değerlikli basamaktan başlayarak sıralar. Sıralamak için ek olarak kova sıralama veya sayma sıralaması kullanılabilir. En son olarak geriye sıralanmış dizi döndürülür.

### Sözde Kodu

    RADIX_SORT(A)
      d = max(A)
      exp = 1
      while max1/exp > 0
        do COUNTING_SORT(arr, exp)
           exp *= 10
      
