class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    push (value) {
        let newNode= new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail =  newNode
            this.length ++
        }
      return this
    }
    pop(){
        if(!this.head){
            return undefined
        }

        let temp = this.head
        let prev = this.head

        while(temp.next){
            prev=temp
            temp = prev.next
        }
        this.tail = prev
        this.tail.next = null


        this.length--
        if(this.length === 0){
            this.head =null
            this.tail = null
        }
    }
    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode = {...newNode ,next : this.head}
            this.head = newNode
            //this.head.next = this.head

        }
        this.length++
    }
    shift(){
        if(!this.head){
            return undefined
        }
        else{
            let temp = this.head
            this.head = this.head.next
            temp.next =null
            this.length --

        }
        if(this.length===0){
            this.tail =null
        }
    }
    getFirst(){
        return this.head
    }
    getLast(){
        if(!this.head){
            return undefined
        }
        let temp = this.head
        while(temp.next){
            temp= temp.next


        }
        return temp
    }   
    get(index){
        if(!this.head){
            return null
        }
        
        let temp = this.head
        while(temp){


            for(let i=0 ; i<Infinity ; i++){
                if(i===index){
                    return temp

                }
                temp = temp.next
            }
           
        }
        return null
       
    }
    set(value,index){
        if(!this.head){
            return null
        }
        let counter = 0
        let temp = this.head
        while(temp){
            if(counter === index){
                temp.value = value
                return temp
            }
            temp = temp.next
            counter++
        }
        return null
    }
    insert(value , index){
        if(index===0){
            return this.unshift(value)
        }
        if(index ===this.length){
            return this.push(value)
        }
       let  newNode = new Node(value)

        let tempBefore = this.get(index-1)
        //let tempAfter = this.get(index+1) 

        newNode.next = tempBefore.next
        tempBefore.next = newNode

        this.length++
        return newNode
    }
    size (){
        let counter = 0 
        let temp = this.head
        while(temp){
            
            counter++
            temp = temp.next
        }
        return counter
    }
    clear(){
        this.head=null
        this.tail=null
        this.length = 0
    }
}
 
const myLinkedList = new LinkedList(0)

myLinkedList.push(0.5)

myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
//console.log(myLinkedList.getLast());
myLinkedList.push(4)
myLinkedList.push(5)
myLinkedList.push(2)

console.log(myLinkedList.insert(6,1));
console.log(myLinkedList.size());


//myLinkedList.shift()
//myLinkedList.push(5)

// myLinkedList.push(7)
// myLinkedList.push(8)

myLinkedList.clear()
console.log(myLinkedList);
