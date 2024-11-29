const reverseString=(str)=>{
    let stack =[]
    for(let char of str){
        stack.push(char)
    }
    let reversed =""
    //let reversed =[]
    for (let i = stack.length ; i>0 ; i--){
        //reversed = stack.push(stack.pop())
        reversed += stack.pop()
    }
    return reversed
    //return stack.join()
}

console.log(reverseString("Hello world"));
