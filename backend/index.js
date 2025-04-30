function bxlendExchangeSequence(start, end) {
    const sequence = [];

    for (start; start<=end; start++){
        // sequence.push(start)

        if(start % 5 == 0 && start % 3 ==0){
            sequence.push("Bexlend Exchange")
        }
        else if(start % 3 == 0){
            sequence.push("bxlend")
        }
        else if(start % 5 == 0){
            sequence.push("Exchange")
        }
        else{
            sequence.push(start)
        }
    }
    return sequence;
}

// Example usage
const start = 1;
const end = 30;
const sequence = bxlendExchangeSequence(start, end);
console.log(sequence);