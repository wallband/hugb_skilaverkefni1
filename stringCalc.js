//String Calculator

function add (numbers){
    if(numbers == "") 
        return 0;
    
    if(numbers.includes(",")) {
        var numberArray = numbers.split(",");
        var retNum = 0;
        for(var i = 0; i < numberArray.length; i++) {
            retNum += parseInt(numberArray[i]);
        }
        return retNum;
    }
    else
        return parseInt(numbers);
    
    
}



module.exports = add;