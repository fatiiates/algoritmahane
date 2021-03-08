# BUCKET SORT

### Time Complexity

The time complexity of the algorithm is as shown below.

           | O(n)     best case
    T(n) = | O(n^2)   worst case
           | O(n + k) average case

### How Bucket Sort Works ?

&emsp;When the algorithm is given a sequence of numbers between 0 and 1, a sequence called buckets is created. Each index of the bucket series is a bucket, and these buckets hold numbers at certain intervals. Array elements are scanned one by one and placed into these buckets. Later, each non-empty bucket is sorted by the insertion sort method. Finally, the elements in the sorted buckets are thrown into a new array one by one and the new array is returned.

### Pseudo Code

    BUCKET_SORT(A)
      n = length(A)
      for i = 0 to n
        do insert A[i] into list B[n * A[i]]
      for i = 0 to n
        do sort B[i] with insertion sort
      concatenate the lists B[0], B[1], ..., B[n-1] together in order
