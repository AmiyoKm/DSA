const isValidParenthesis =(str)=>{
    class Node {
        constructor(value){
            this.value = value
            this.next = null
        }
    }
    class Stack{
        constructor(value){
            this.first = new Node(value)
            this.last = this.first
            this.length =1
        }
    }
    let myStack = new Node(str[0])
    let stack = []
    const brackets ={
        "[": "]",
        "{": "}",
        "(" : ")"
    } 
    for (let char of str){
        if(brackets[char]){
            stack.push(char)
        }
        else{
          const top =  stack.pop() 
          if(!top || brackets[top]!== char){
            return false
          } 
        }
    }
    
    return stack.length ===0
}



console.log(isValidParenthesis("([]{})"));
console.log(isValidParenthesis("([]}"));
console.log(isValidParenthesis("()[{}"));
