# İKİLİ ARAMA(BINARY SEARCH)

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(1)  en iyi durum
    T(n) = | O(log n) en kötü durum
           | O(log n) ortalama durum
           
Algoritmanın iteratif denklemi ise:

    T(n) = (logn - 1)*O(1) + T(1)
    
olarak ifade edilebilir.

### Çalışma Mantığı

&emsp;Algoritmaya sıralanmış bir dizi ve aranacak eleman verildiğinde, dizinin ortasnda bulunan sayı ile aranan sayıyı karşılaştırılır ve bu işlem sayı bulunana kadar veya eldeki dizide bir ifade kalmayana kadar devam eder. Algoritma sonucunda örnek olarak aranan eleman bulunamadıysa geriye -1, aranan eleman bulunduysa dizideki indisi döndürülerek sonlandırılır.

### Sözde Kodu

    İkili Arama(Dizi,n,x,bulundu, yeri)
      Yerel değişkenler
      alt, ust, orta : integer;
      Ust = n, alt = 1, bulundu = 0
      (bulundu = 0) ve (ust = alt) olduğu sürece devam et
         orta = ( alt + ust ) / 2 
         eğer x = Dizi[orta] ise
          bulundu = 1
         değil ve eğer x < Dizi2[ orta ] ise
          ust = orta-1
        değilse
          alt = orta+1
      yeri = orta
