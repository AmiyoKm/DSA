const studentName= ['Amiyo ' , 'Tanvir' , 'ekhon ' , 'nuhash' , 'jubayer']


const findName = (studentName , name) => {
    const result = studentName.find(( stName) =>  stName === name)

    console.log(result);
    
}

findName(studentName , "jubayer")

