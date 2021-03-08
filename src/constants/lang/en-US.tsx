export const constraints = {
    mustRatio: 'Your data must consist of rational numbers.',
    mustInteger: 'Your data must consist of integer numbers.',
    mustRangeMillion: 'Numbers must be in the range [-1000000, 1000000].',
    ratioForceToInteger: 'Girilen ondalık sayıların tam kısımları sayılacaktır.',
};

export const algorithms = {
    "search": {
        name: 'Searching Algorithms',
        icon: 'search',
        algorithms: [
            {
                constraints: [
                    constraints.mustRatio,
                    constraints.mustRangeMillion
                ],
                endPoint: "search/binary",
                explain: 'It is a search algorithm that usually runs in O(log n) time. \
                    In an ordered array, divide it in half and compare the numbers in the middle of the arrays. \
                    Tries to locate the number according to the situation of the number being greater or less than the pivot.',
                name: "Binary Search",
            },
            {
                constraints: [
                    constraints.mustRatio,
                    constraints.mustRangeMillion
                ],
                endPoint: "search/linear",
                explain: 'It is a search algorithm that usually runs in O(log n) time. \
                    It tries to find the result by comparing all numbers and the searched element linearly.',
                name: "Linear Search"
            }
        ]
    },
    "sort": {
        name: 'Sorting Algorithms',
        icon: 'sort',
        algorithms:[
            {
                constraints: [
                    constraints.mustRatio,
                    constraints.mustRangeMillion
                ],
                endPoint: "sort/bucket",
                explain: 'It is a sort algorithm that usually runs in O(n + k) time. \
                    All numbers are filled into buckets at certain intervals, then each non-empty bucket is lined up and combined.',
                name: "Bucket Sort"
            },
            {
                constraints: [
                    constraints.mustInteger,
                    constraints.mustRangeMillion,
                    constraints.ratioForceToInteger
                ],
                endPoint: "sort/counting",
                explain: 'It is a sort algorithm that usually runs in O(n + k) time. \
                    An array with the largest number (k) in length is created. Each array element is checked and the corresponding index is incremented by one.\
                    The array is then combined into a new array in turn.',
                name: "Counting Sort"
            },
            {
                constraints: [
                    constraints.mustRatio,
                    constraints.mustRangeMillion
                ],
                endPoint: "sort/heap",
                explain: 'It is a sort algorithm that usually runs in O(n*logn) time.  \
                    Array elements are placed in a heap tree and elements are stacked with Heapify. \
                    The root knot is taken and the last element of the result sequence is made and the tree is stacked again. \
                    And this layout continues until all elements are transferred to the result array.',
                name: "Heap Sort"
            },
            {
                constraints: [
                    constraints.mustRatio,
                    constraints.mustRangeMillion
                ],
                endPoint: "sort/insertion",
                explain: 'It is a sort algorithm that usually runs in O(n^2) time. \
                    Basically, it is based on the comparison of each element with the previous elements. \
                    In this comparison, if it is smaller than the number it is compared, the replacement process is performed.',
                name: "Insertion Sort"
            },
            {
                constraints: [
                    constraints.mustRatio,
                    constraints.mustRangeMillion
                ],
                endPoint: "sort/merge",
                explain: 'It is a sort algorithm that usually runs in O(n*logn) time. \
                    Divides the series into two equal (approximate) parts. \
                    The Merge sorting algorithm is recursively called for the split parts. \
                    Arrays sorted within themselves are combined sequentially.',
                name: "Merge Sort"
            },
            {
                constraints: [
                    constraints.mustRatio,
                    constraints.mustRangeMillion
                ],
                endPoint: "sort/quick",
                explain: 'It is a sort algorithm that usually runs in O(n*logn) time. \
                    Any number is chosen as a pivot. \
                    Numbers smaller than this pivot are placed in indices lower than the pivot, and large numbers are placed in indices greater than the pivot. \
                    The lower and upper arrays obtained in this way call the fast sorting algorithm within themselves. \
                    As a result of the algorithm, an sorted array is obtained. \
                    Additionally, it is portrayed as a widely used algorithm in the literature.',
                name: "Quick Sort"
            },
            {
                constraints: [
                    constraints.mustRatio,
                    constraints.mustRangeMillion,
                    constraints.ratioForceToInteger
                ],
                endPoint: "sort/radix",
                explain: 'It is a sort algorithm that usually runs in O(n*k) time. \
                    It basically relies on counting sorting or bucket sorting algorithms. \
                    Sorts the array elements for each digit, starting with the lowest-valued digit.',
                name: "Radix Sort"
            }
        ]
    }
}

export const stepperLang = {
    doneButton: 'Done',
    nextButton: 'Next',
    backButton: 'Back',
    clearButton: 'Clear',
    workDone: 'Process completed!'
};

export const forms = {
    datasetFormRandomDatasetInput: "Define the properties of the data set.",
    datasetFormSpecialDatasetInput: "Enter your data set in the text area below.",
    datasetFormSpecialDatasetConstraints: [
        "Enter the data without spaces, separating them with ',' (a comma).",
        "Only numbers, '.' (dot) and ',' (comma) signs are accepted."
    ],
    datasetFormRandomDatasetMinInputPlaceHolder: 'Number range - Min',
    datasetFormRandomDatasetMaxInputPlaceHolder: 'Number range - Max',
    datasetFormRandomDatasetPieceInputPlaceHolder: 'Quantity to be produced',
    datasetFormSpecialDatasetInputPlaceHolder: 'Dataset',
    datasetFormInputForSearchPlaceHolder: 'Value to search',
    datasetFormInputForSearchHelperText: '1- Only numbers and \'.\' (dot) signs are accepted.'
};

export const indexPage = {
    stepperSteps: [
        'Choose your algorithm.',
        'Enter/create dataset.',
        'Results',
    ],
    foundedSearchAlgorithm: 'search algorithms found.',
    foundedSortAlgorithm: 'sorting algorithm found.',
    thatIs: 'It is',
    search: 'search',
    sort: 'sort',
    niceChoice: ' algorithm. Good choice!',
    information: '# Information',
    choosenAlgorithm: 'Algorithm of your choice',
    briefly: '# Briefly',
    datasetConstraints: '# Data set restrictions',
    defaultConstraints: [
        "Each data must be separated by ',' (comma).",
        "For decimal data, the '.' (dot) separator should be used."
    ],
    randomDataset: 'Random dataset',
    specialDataset: 'SPECIAL DATASET',
    backButton: 'Back',
    resultsButton: 'See the results',
    moreInformation: 'More information',
    selectedAlgorithmIsNone: 'Seçili bir algoritma bulunamadı. Lütfen geri gidin ve bir algoritma seçin.',
    success: 'Successful! Values ​​have arrived.',
    attribute: 'Attribute',
    results: 'Results',
    performance: 'Performance',
    elapsedTime: number => `Performed within ${number} milliseconds.`,
    transactionCount: 'Number of transactions',
    performedProcess: number => `Exactly ${number} transactions were carried out.`,
    searchResult: 'Search Result',
    searchedElementIsExist: index => `The element you are looking for is ${index}. found in the index`,
    searchedElementIsNone: "The element you are looking for does not exist in the data set.",
    sortedDataset: 'Sorted Data Set',
    usedDataset: 'Data set used',
    clearButton: 'Clear',
    defaultStepInfo: 'Step is not found.',
    start: 'So, let\'s start!'
};

export const drawerLang = {
    organizationName: 'ALGORITMAHANE'
};