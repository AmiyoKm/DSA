const arr = [7,5,3,6,11,8]

let foundMinIndex 
let max
const buySell =()=>{
    const min = Math.min(...arr)

    arr.map((number , index)=> {
        if(min===arr[index]){
            foundMinIndex = index
            console.log(foundMinIndex);
            
        }
    })
    for(let i=foundMinIndex ; i< arr.length ; i++ ){
        if(arr[i] > arr[foundMinIndex]){
             max = arr[i]
        }
    }
    return ` min : ${min} max : ${max} : difference : ${max - min}`
}



console.log(buySell());
