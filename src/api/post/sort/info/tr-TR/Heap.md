# YIĞIN SIRALAMASI

### Zaman Karmaşıklığı

Algoritmanın zaman karmaşıklığı, aşağıda gösterildiği gibidir.

           | O(n) en iyi durum
    T(n) = | O(n*logn) en kötü durum
           | O(n*logn) ortalama durum

### Yığın Sıralaması Nasıl Çalışır ?

&emsp;Algoritmaya bir dizi verildiğinde, diziler bir yığın ağacına atılır ve en son elemandan ilk elemana doğru heapify metoduyla yığın düzenlenir. Kök düğüm alınarak sonuç dizisinin en son elemanı yapılır ve tekrarlanarak tüm elemanlar bitene kadar devam eder. En sonunda sıralanmış dizi geriye döndürülür

### Sözde Kodu

    Heapsort(A)
      BuildHeap(A);
      for (i = length(A) downto 2)
        Swap(A[1], A[i]);
        heap_size(A) -= 1;
        Heapify(A, 1);
      
     BuildHeap(A)
       heap_size(A) = length(A);
       for (i = length[A]/2 downto 1)
       Max_Heapify(A, i);
     
     Heapify ( A, i)
      L = Left(i); R = Right(i);
      if (L <= heap_size(A) && A[L] > A[i])
        largest = L;
      else
        largest = i;
      if (R <= heap_size(A) && A[R] > A[largest])
        largest = R;
      if (largest != i)
        Swap(A, i, largest); Max_Heapify (A,largest);
      
