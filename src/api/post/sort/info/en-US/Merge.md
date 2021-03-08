# MERGE SORT

### Time Complexity

The time complexity of the algorithm is as shown below.

           | O(n)       best case
    T(n) = | O(n*log n) worst case
           | O(n*log n) average case
           
The algorithm's iterative equation is:

    T(n) = 2*T(n/2) + O(n)
    
can be expressed as.

### How Merge Sort Works ?

&emsp;Given an array to the algorithm, it splits the array equally into two sub-arrays. This process continues until there is only 1 element left in the sub-arrays. Sub-arrays are sorted within themselves and combine sorted sub-arrays into a single sequential array. At the end, the sorted array is returned.

### Pseudo Code

    MERGE_SORT(A, p, r)
      if p < r
        q = (p+r)/2
        MERGE_SORT(A, p, q)
        MERGE_SORT(A, q+1, r)
        MERGE(A, p, q, r)
      
    MERGE(A, p, q, r)
      n1 = q - p + 1
      n2 = r - q
      let L[1..n1+1] and R[1..n2+1] be new arrays
      for i = 1 to n1
        L[i] = A[p+i-1]
      for j = 1 to n2
        R[j] = A[q+j]
      L[n1+1] = NUMBER_MAX
      L[n2+1] = NUMBER_MAX
      i = 1
      j = 1
      for k = p to r
        if L[i] <= R[j]
          A[k] = L[İ]
          i = i+1
        else A[k] = R[j]
          j= j+1
