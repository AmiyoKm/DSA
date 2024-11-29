
const wordCounter =(str)=>{
    let splitted = str.toLowerCase().split(' ')
    let wordMap = {}
    for( let word of splitted){
        if(word in wordMap){
            wordMap[word] ++
        }
        else{
            wordMap[word] = 1
        }
    }
    return wordMap
    
}
wordCounter("heLLo this is my my my name")
console.log(wordCounter("heLLo this is my my my name"));
