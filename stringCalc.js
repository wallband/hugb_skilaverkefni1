//String Calculator

function add (numbers){
    if(numbers == "") 
        return 0;
    
    if(numbers.includes(",")) {
        var numberArray = numbers.split(",");
            var numberArray = numbers.split(/[\n,]/g);
        return sum(numberArray);
    }
    else
        return parseInt(numbers);
    
    
}

function sum(numArr) {
    var retNum = 0;
    for(var i = 0; i < numArr.length; i++) {
        retNum += parseInt(numArr[i]);
    }
    return retNum;
}


module.exports = add;