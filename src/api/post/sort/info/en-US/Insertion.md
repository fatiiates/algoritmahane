# INSERTION SORT

### Time Complexity

The time complexity of the algorithm is as shown below.

           | O(n)   best case
    T(n) = | O(n^2) worst case
           | O(n^2) average case        

### How Insertion Sort Works ?

&emsp;When an array is given to the algorithm, the following operations realise for each array element: The element starts to be compared with the numbers before it. If it is smaller than the number it is compared to, it is replaced by that number. And the loop continues to rotate for the next element. The most recently sorted array is returned.

### Pseudo Code

    INSERTION_SORT(A, n)
      for j = 2 to n
        do k = A[j]
           i = j -1
           while i > 0 and A[i] > k
            do A[i+1] = A[i]
               i = i -1
           A[i+1] = k
      
