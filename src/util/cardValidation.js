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
    for (let key in regex) {
        let re = new RegExp(regex[key]);
        if (re.test(value)) return key;
    }
    return 'visa';
};

export const validCardNum = value => {
    let regex = {
        visa: '^4[0-9]{12}(?:[0-9]{3})?$',
        master:
            '^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$',
        discover:
            '^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$',
        amex: '^3[47][0-9]{13}$',
    };
    let type = cardType(value);
    let numOnly = value.replace(/\s/g, '');
    let re = new RegExp(regex[type]);
    let validType = re.test(numOnly);
    let validDigits = checkLuhn(numOnly);
    return validType && validDigits;
};

const checkLuhn = value => {
    let sum = 0;
    let shouldDouble = false;
    for (let i = value.length - 1; i >= 0; i--) {
        let digit = parseInt(value.charAt(i));
        if (shouldDouble) {
            if ((digit *= 2) > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
};

export const validCvv = (cvv, card) => {
    let type = cardType(card)
    return type==='amex' ? cvv.length===4 : cvv.length===3
}