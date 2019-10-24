//AmEx => start with 3, second digit is a 4 or 7; 15 digits

//discover => 16 digits, must be in one of the following ranges:
// 601100 through 601109
// 601120 through 601149
// 601174
// 601177 through 601179
// 601186 through 601199
// 644000 through 659999

//MasterCard => 16 digits, two options:
//first digit 5 and second in range of 1 through 5
//OR
//first digit is 2 and second digit in range of 2 through 7

//Visa Up to 19 digits, first digit must be a 4

export const cardType = value => {
    let regex = {
        visa: '^4',
        discover: '^6(011|5)',
        master: '^(5[1-5]|2[2-7])',
        amex: '^(34|37)',
    };
    for(let key in regex){
        let re = new RegExp(regex[key])
        if(re.test(value)) return key
    }
    return 'visa'
};

export const validCardNum = value => {
    let regex = {
        visa: '^4[0-9]{12}(?:[0-9]{3})?$',
        master:
            '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$',
        discover: '^6(?:011|5[0-9]{2})[0-9]{12}$',
        amex: '^3[47][0-9]{13}$',
    };
    let type = cardType(value)
    let numOnly = value.replace(/\s/g, '')
    let re = new RegExp(regex[type])
    return re.test(numOnly)
};
