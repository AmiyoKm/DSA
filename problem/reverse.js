

const reverse = (data)=>{
   const splitArray = data.split("").reverse().join('')
   if(splitArray === data){
    return `it is a pallendrum ${splitArray}`
   }
   return splitArray
}

//console.log(reverse("abba"));

const reverseNumber =(data)=>{
  return  data.toString().split("").reverse().join("")
}
console.log(reverseNumber(234247234));
