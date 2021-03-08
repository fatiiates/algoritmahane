# COUNTING SORT

### Time Complexity

The time complexity of the algorithm is as shown below.

           | O(n + k) best case
    T(n) = | O(n + k) worst case
           | O(n + k) average case

### How Counting Sort Works ?

&emsp;When an array is given to the algorithm, the data is considered to be between 0 and k. An array of size K is defined and every element of the given array starts to be scanned. For each element scanned, the area expressed in array k is increased by one. Then, non-empty indices in the defined array are transferred to a new array sequentially. In the last case, the new array is returned.

### Pseudo Code

    COUNTING_SORT(A, k)
      for i = 1 to k
        do C[i] = 0
      for j = 1 to n
        do C[A[j]] = C[A[j]] + 1
      for i = 2 to k
        do C[i] = C[i] + C[i-1]
      for j = n down to 1
        do B[C[A[j]]] = A[j]
           C[A[j]] = C[A[j]] - 1
      
