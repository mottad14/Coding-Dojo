var square = [
    [2,5,8],
    [3,6,4,2,1],
    [5,7,7]
];
//should return true or false is val is found in arr2d
function isPresent2d(arr2d, val){
    for(var i = 0; i < arr2d.length; i++){
        
        // This uses include function//
        if(arr2d[i].includes(val)){
            return true
        }
        // for (var y = 0; y < arr2d[i].length; y++){
        //     if (arr2d[i][y] == val){
        //         return true
        //     }
        // } 
    }
    return false;
}
console.log(isPresent2d(square,1));
console.log(isPresent2d(square,14));

function flatten(arr2d){
    var flat = [];
    for(var i = 0; i < arr2d.length; i++){
        for (var y = 0; y < arr2d[i].length; y++){
            flat.push(arr2d[i][y])
        } 
    }
    return flat;
}

var result = flatten(square);
console.log(result); //should print out 2,5,8,3,6,1,5,7,7

