# DOĞRUSAL ARAMA(LINEAR SEARCH)

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(1)  en iyi durum
    T(n) = | O(n) en kötü durum
           | O(n) ortalama durum

### Çalışma Mantığı

&emsp;Algoritmaya bir dizi ve aranacak eleman verildiğinde, ilk elemandan başlar ve son elemana doğru sıra sıra tüm elemanları gezerek aranan elemanla eşleştirmeye çalışır. Algoritma sonunda örnek olarak aranan eleman eşleşirse geriye, elemanın dizide bulunduğu indis döndürülür. Eğer aranan eleman eşleşmezse geriye -1 döndürülür.

### Sözde Kodu

    Dogrusal Arama(n,x)
      i=1, Veri_Var=0
      (i<=n) ve !(Veri_Var) olduğu sürece devam et
        eğer Dizi[i]=x ise
          Veri_Var=1
        i=i+1
