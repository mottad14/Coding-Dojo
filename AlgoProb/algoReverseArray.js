function reverse(arr){
    var tempArray = []
    for(var i = (arr.length-1); tempArray.length <arr.length; i--){
        tempArray.push(arr[i]);
        console.log(tempArray);
    }
    var temp = tempArray;
    someArray = temp;
    return someArray; 
}
var someArray = [4,8,15,16,23,42];
reverse(someArray);
console.log(someArray);//should print out [42,23,16,15,8,4]