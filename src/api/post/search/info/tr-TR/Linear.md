# DOĞRUSAL ARAMA

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(1)  en iyi durum
    T(n) = | O(n)  en kötü durum
           | O(n)  ortalama durum

### Doğrusal Arama Nasıl Çalışır ?

&emsp;Algoritmaya bir dizi ve aranacak eleman verildiğinde, ilk elemandan başlar ve son elemana doğru sıra sıra tüm elemanları gezerek aranan elemanla eşleştirmeye çalışır. Algoritma sonunda örnek olarak aranan eleman eşleşirse geriye, elemanın dizide bulunduğu indis döndürülür. Eğer aranan eleman eşleşmezse geriye -1 döndürülür.

### Sözde Kodu

    Linear Search(n,x)
      i=1, found=0
      if (i<=n) and !(found)
        if Array[i]=x
          found=1
        i=i+1
