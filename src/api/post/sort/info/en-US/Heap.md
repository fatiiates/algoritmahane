# HEAP SORT

### Time Complexity

The time complexity of the algorithm is as shown below.

           | O(n)      best case
    T(n) = | O(n*logn) worst case
           | O(n*logn) average case

### How Heap Sort Works ?

&emsp;When an array is given to the algorithm, the arrays are dropped into a stack tree and the stack is arranged from the last element to the first element using the heapify method. The root node is taken and the last element of the result array is made and repeated until all elements are finished. Finally the sorted array is returned.

### Pseudo Code

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
      
