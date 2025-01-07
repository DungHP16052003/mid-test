function findSecondLargestNumber(arr){
    let arr2 = arr[0];
    if(!Array.isArray(arr) || arr === ""){
        return Invalid;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1] > arr2){
            arr2 = arr[i+1];
        }
    }
    return arr2;
    if(!findSecondLargestNumber()){
        return null;
    }
}
console.log(findSecondLargestNumber(2,3,5,6));