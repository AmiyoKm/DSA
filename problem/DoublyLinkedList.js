class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            newNode.prev = null
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail =  newNode
       
        this.length++
        return this
    }
    pop(){
        if(!this.head){
            return undefined
        }
       if(this.length===1){
        this.head = null
        this.tail = null
       }
        let temp = this.tail
       this.tail = this.tail.prev
       this.tail.next = null
        temp.prev = null
        this.length--
        return this
       
    }
    unShift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head =newNode
            this.tail = this.head    
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length ++
        return this

    }
    shift(){
        if(!this.head){
            return null
        }
        if(this.length===1){
            this.head =null
            this.tail = null
        }
        let temp = this.head
        this.head = temp.next
        this.head.prev = null
        temp.next =null
       
        this.length--
        return this
    }
}

const myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.push(4)
myDoublyLinkedList.push(5)
myDoublyLinkedList.shift()
console.log(myDoublyLinkedList);
