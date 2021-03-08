# QUICK SORT

### Time Complexity

The time complexity of the algorithm is as shown below.

           | O(n)       best case
    T(n) = | O(n^2)     worst case
           | O(n*log n) average case
           
The algorithm's iterative equation is:

    T(n) = (logn - 1)*O(1) + T(1)
    
can be expressed as.

### How Quick Sort Works ?

&emsp;When a sequence is given to the algorithm, any number is chosen as the pivot (usually the first element). The numbers in the array that are smaller than the pivot are updated from the pivot to the lower indices, and the numbers larger than the pivot to be at indices higher than the pivot. The fast sorting algorithm is called again for the bottom and top arrays. Finally, the sorted array is returned.

### Pseudo Code

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
