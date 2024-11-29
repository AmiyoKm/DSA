function insertionSort(arr){
    for(let i =1 ; i< arr.length ; i++){
        let current = arr[i]
        let j = i-1


        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}

const unSortedArr = [5,2,4,6,1,3]

console.log(insertionSort(unSortedArr));
