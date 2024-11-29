class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }
  _hashFunction(key) {
    let sum = 0;
    const PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        const charCode = key.charCodeAt(0) - 96
        sum = (sum* PRIME_NUMBER + charCode) % this.keyMap.length
    }
    return Math.abs(sum)
  }
  set(key , value){
    const index = this._hashFunction(key)
    //console.log(!this.keyMap[index]);
    if(!this.keyMap[index]){
      this.keyMap[index] =[]
    }
    this.keyMap[index].push([key , value])
    return this
  }
  get(key){
    const index = this._hashFunction(key)
    if(!this.keyMap[index]) return undefined

    for(let i = 0 ; i<this.keyMap[index].length ; i++){
      if(this.keyMap[index][i][0] === key ){
        return this.keyMap[index][i]
      }
    }
    return undefined;
  }
  getAllKeys(){
    let keys = []
    for(let i=0 ; i<this.keyMap.length ; i++){
      if(this.keyMap[i]){
        for(let j=0 ; j<this.keyMap[i].length ;j++){
          keys.push( this.keyMap[i][j][0])
        }
        
      }
    }
    return keys
  }
  getAllValues(){
    let values = []
    for(let i = 0 ; i<this.keyMap.length ; i++){
      if(this.keyMap[i]){
        for(let j=0 ; j< this.keyMap[i].length ; j++){
          values.push(this.keyMap[i][j][1])
        }
      }
    }
    return values
  }
}
const phoneBook = new HashTable();
phoneBook.set("alex", "01911937021");
phoneBook.set("alex", "01911937029");
phoneBook.set("tamim", "01911937029");
phoneBook.set("alex", "01911937029");


console.log(phoneBook); 

