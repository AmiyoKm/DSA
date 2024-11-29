const capitalize =(data)=>{
  

    
    // for(let  i =0 ; i<splitOriginal.length ; i++ ){
    //     splitOriginal[i] =  splitOriginal[i][0].toUpperCase() + splitOriginal[i].slice(1)
        
        
    // }
 return   data.split(" ").map((word )=> word[0].toUpperCase() + word.slice(1)).join(" ")
  
  
 
   
}

console.log(capitalize( "hello world"));
