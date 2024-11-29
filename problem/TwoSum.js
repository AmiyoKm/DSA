

const twoSum = (numArr , target)=>{
    for (let i=0 ; i < numArr.length ; i++){
        for(let j = i ; j <numArr.length ; j++){
            if(numArr[i] + numArr[j] === target){
                return [i , j]
            }
        }
    }
}

console.log(twoSum([10,7,2] , 9));
