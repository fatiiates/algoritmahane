# RADIX SORT

### Time Complexity

The time complexity of the algorithm is as shown below.

           | O(n)   best case
    T(n) = | O(n*k) worst case
           | O(n*k) average case

### How Radix Sort Works ?

&emsp;Given an array to the algorithm, it orders the elements from the lowest-valued digit. Bucket sort and counting sort can be used additionally for sorting. Finally, the sorted array is returned.

### Pseudo Code

    RADIX_SORT(A)
      d = max(A)
      k = 1
      while max1/k > 0
        do COUNTING_SORT(arr, k)
           k *= 10
      
