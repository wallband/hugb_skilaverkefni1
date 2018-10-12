//String Calculator

class NoNegativesException extends Error {
    constructor(message) {
        super(message);
        this.name = "NoNegativesException";

    }
}

function add (numbers){
    try {
        if(numbers == "") 
            return 0;

        if(parseInt(numbers) < 0) throw new NoNegativesException("Negatives are not allowed");

        if(numbers.includes(",")) {
            var numberArray = numbers.split(",");
                var numberArray = numbers.split(/[\n,]/g);
            return sum(numberArray);
        }
        
            return parseInt(numbers); 
    }
    catch(err) {
        var negError = err.message;
        return negError;
    } 
}

function sum(numArr) {
    var retNum = 0;
    for(var i = 0; i < numArr.length; i++) {
        retNum += parseInt(numArr[i]);
    }
    return retNum;
}


module.exports = add;