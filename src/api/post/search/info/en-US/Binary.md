# BINARY SEARCH

### Time Complexity

The time complexity of the algorithm is as shown below.

           | O(1)     best case
    T(n) = | O(log n) wort case
           | O(log n) average case

### How Binary Search Works ?

&emsp;When a sorted array and an element to be searched are given to the algorithm, the number in the middle of the array is compared with the searched number, and this process continues until the number is found or until there is no expression in the array at hand. As a result of the algorithm, if the searched element is not found, it is terminated by returning -1, if the searched element is found, the index in the array is returned.

### Pseudo Code

    Binary Search(Array,n,x,found,foundedIndex)
      Local variables
      bottom, top, medium : integer;
      Ust = n, bottom = 1, found = 0
      if (found = 0) and (top = bottom)
         medium = ( bottom + top ) / 2 
         if x = Array[medium] ise
          found = 1
         elif x < Array2[ medium ]
          top = medium-1
         else
          bottom = medium+1
      foundedIndex = medium
