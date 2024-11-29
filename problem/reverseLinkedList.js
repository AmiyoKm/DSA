class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length ++
        return this
    }
    reverse(){
        let tempHead = this.head
        let tempTail = this.tail
        this.tail = tempHead
        this.head = tempTail
        
         this.head.next = tempTail.prev
         this.head.next.next =this.head.next.prev
         this.head.next.prev =null
         this.head.prev = null


         this.tail.prev =tempHead.next
       this.tail.next = null
        
        
    }
}

const myLinkedList = new LinkedList(5)

myLinkedList.push(4)
myLinkedList.push(3)
myLinkedList.push(2)
myLinkedList.push(1)
myLinkedList.reverse()

console.log(myLinkedList);
