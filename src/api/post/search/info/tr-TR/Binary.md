# İKİLİ ARAMA

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(1)     en iyi durum
    T(n) = | O(log n) en kötü durum
           | O(log n) ortalama durum

### İkili Arama Nasıl Çalışır ?

&emsp;Algoritmaya sıralanmış bir dizi ve aranacak eleman verildiğinde, dizinin ortasında bulunan sayı ile aranan sayıyı karşılaştırılır ve bu işlem sayı bulunana kadar veya eldeki dizide bir ifade kalmayana kadar devam eder. Algoritma sonucunda örnek olarak aranan eleman bulunamadıysa geriye -1, aranan eleman bulunduysa dizideki indisi döndürülerek sonlandırılır.

### Sözde Kodu

    Binary Search(Array,n,x,found,foundedIndex)
      Local variables
      bottom, top, medium : integer;
      Ust = n, bottom = 1, found = 0
      if (found = 0) and (top = bottom)
         medium = ( bottom + top ) / 2 
         if x = Array[medium] ise
          found = 1
         elif x < Array2[ medium ]
          top = medium-1
         else
          bottom = medium+1
      foundedIndex = medium
