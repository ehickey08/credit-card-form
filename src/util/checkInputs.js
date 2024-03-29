import { cardType } from './cardValidation';

export const digitOnly = value => {
    return value.length === 0 || /^(\d|\s)*$/.test(value);
};

export const letterOnly = value => {
    return value.length === 0 || /^[A-Z .-]*$/i.test(value);
};

export const formatCardNum = value => {
    if (!digitOnly(value)) return false;
    if (value.length === 0) return value;
    let type = cardType(value);
    let numOnly = value.replace(/\s/g, '');
    let parts = [],
        goodParts = [];
    if (type === 'amex') {
        parts = numOnly.match(/(^\d{1,4})(\d{1,6})?(\d{1,5})?/);
        for (let i = 1; i < 4; i++) {
            if (parts[i]) goodParts.push(parts[i]);
        }
    } else {
        parts = numOnly.match(/(^\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/);
        for (let i = 1; i < 5; i++) {
            if (parts[i]) goodParts.push(parts[i]);
        }
    }
    return goodParts.join(' ');
};

export const formatCardWithMask = value => {
    let type = cardType(value);
    let digitsOnly = formatCardNum(value);
    let masks = { amex: '#### ###### #####', other: '#### #### #### ####' };
    let mask = type==='amex' ? masks.amex : masks.other
    let cutMask = mask.slice(digitsOnly.length)
    return `${digitsOnly}${cutMask}`
};
