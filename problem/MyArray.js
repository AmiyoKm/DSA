class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
       
    }
    push  (item){
        this.data[this.length] = item
        this.length++
        return this.data
    }
    get(index){
        return this.data[index]
    }
    pop(){
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return this.data
    }
    shift(index){
        for(let i =index; i<this.length ; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }
    delete(index){
        for(let i = index ; i<this.length ; i++){
            this.data[i]=this.data[i+1]
        } 
        delete this.data[this.length-1]
        this.length--
        return this.data
    }
}

const myNewArray = new MyArray()
myNewArray.push( "Apple");
myNewArray.push( "banana");
myNewArray.push( "Mango");
myNewArray.push( "banana");
myNewArray.push( "Watermelon");
myNewArray.delete(0);
console.log(myNewArray.data);