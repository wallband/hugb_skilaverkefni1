//String Calculator

class NoNegativesException extends Error {
    constructor(message, negNum) {
        super(message, negNum);
        this.negNumArr = negNum;
        this.name = "NoNegativesException";
        if(negNum.includes(",")) {
            this.negNumArr = negNum.split(",");
                this.negNumArr = negNum.split(/[\n,]/g);
        }

    }
}

function add (numbers){
    try {
        if(numbers == "") 
            return 0;

        if(numbers.includes(",")) {
            var numberArray = numbers.split(",");
                var numberArray = numbers.split(/[\n,]/g);
            return sum(numberArray);
        }
        
        if(parseInt(numbers) < 0) {
            throw new NoNegativesException("Negatives are not allowed: ", numbers);
        }
        return parseInt(numbers); 
    }
    catch(err) {
        var negError = err.message;
        var retNums = err.negNumArr;
        return negError + retNums;
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