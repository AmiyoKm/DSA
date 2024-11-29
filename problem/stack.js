class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }
  push(value){
    let newNode = new Node(value)
    if(this.length===0){
        this.first = newNode
        this.length++
        return this
    }
    newNode.next = this.first
    this.first = newNode
    this.length++
    return this
  }
  pop(){
    if(this.length===0){
        return undefined 
    }
    if(this.length===1){
        this.first=null
        this.length--
        return
    }
    let temp = this.first
    this.first = temp.next
    temp.next =null
    this.length--
    return this
  }
  min(){
    let temp = this.first
    let min = this.first.value
    while(temp){
      console.log(min , temp.value);
      if(min>=temp.value){
        min = temp.value

      }
      
      temp = temp.next
    }
     return min

  }
}

let theStack = new Stack(10);
theStack.push(1)
theStack.push(2)
theStack.push(5)

console.log(theStack.min());
