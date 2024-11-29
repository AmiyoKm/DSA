const twoSum=(nums , target)=>{
    let store = {}
    let diff = 0
    for(let i=0 ; i< nums.length; i++){
        diff =target - nums[i]
        store[nums[i]] = i
        
         if(diff in store && store[diff] !==i){
            return [store[diff] , i]
         }
        }
        console.log(store);
}
console.log(twoSum([2,4,5,30 , 6 ], 10));
