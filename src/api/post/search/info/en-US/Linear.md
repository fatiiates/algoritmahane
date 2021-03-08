# LINEAR SEARCH

### Time Complexity

The time complexity of the algorithm is as shown below.

           | O(1)  best case
    T(n) = | O(n)  worst case
           | O(n)  average case

### How Linear Search Works ?

&emsp;When an array and an element to be searched are given to the algorithm, it starts with the first element and tries to match the searched element by browsing through all the elements in rows towards the last element. At the end of the algorithm, if the searched element matches, the index of the element in the array is returned. If the searched element does not match, -1 is returned.

### Pseudo Code

    Linear Search(n,x)
      i=1, found=0
      if (i<=n) and !(found)
        if Array[i]=x
          found=1
        i=i+1
