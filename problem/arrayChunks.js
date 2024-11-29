

const chunking =(numArray , chunks)=>{
    const myNewArray =[]
    for(let i=0 ; i<chunks ; i++){
        myNewArray.push(numArray.slice(i*numArray.length/chunks ,(i+1)*numArray.length/chunks  ))
    }
    return myNewArray
}

console.log(chunking([1,2,3,4,5,6,7,8,9],2));


const chunkingBySize = (numArray , chunks)=>{
    const myNEwArray = []

    for(let i=0 ; i<numArray.length ; i+=chunks){
        myNEwArray.push(numArray.slice(i , i+chunks))
    }
    return myNEwArray
}
console.log(chunkingBySize([1,2,3,4,5,6,7,8,9],2));