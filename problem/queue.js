class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(value) {
    this.first = new Node(value);
    this.last = this.first;
    this.length = 1;
  }
  enQueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
      this.length++;
      return this;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }
  deQueue() {
    if (this.length === 0) {
      return undefined;
    }
    // let prev = this.first
    // while(temp.next){
    //     prev = temp
    //     temp = temp.next
    // }
    // prev.next = null
    // this.last = prev
    // // this.last.next = null
    // temp.next= null
    if (this.length === 1) {
      this.first = null;
      this.length = null;
    }
    let temp = this.first;
    this.first = this.first.next
    temp.next =null

    this.length--;
    return temp;
  }
}

let myQueue = new Queue(0);
myQueue.enQueue(1);
myQueue.enQueue(2);

myQueue.deQueue();
console.log(myQueue);
