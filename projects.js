/* ========================================== */
/* Palindrome Checker */
function palindrome(str) {
    const newStr = str.replace(/[_\W]/g, '');
    return isPalindrome(newStr);
}


function isPalindrome(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

}

palindrome("eye");



/* ========================================== */
/* Caesars Cipher */
function rot13(str) {

    return str.replace(/[A-Z]/g, (letter) => {
        let asciValue = letter.charCodeAt(0) + 13;

        if (asciValue > 90) {
            asciValue = asciValue % 90 + 64;
        }

        return String.fromCharCode(asciValue)
    });
}

rot13("SERR PBQR PNZC");



/* ========================================== */
/* Telephone Number Validator */
/* Pretty sure there's a simpler solution */
function telephoneCheck(str) {

    const re = /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g;
    return re.test(str);
}

telephoneCheck("555-555-5555");



/* ========================================== */
/* Convert to Roman Numbers */
const converted = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}
function convertToRoman(num) {
    let final = '';

    for (let roman in converted) {
        while (num >= converted[roman]) {
            num -= converted[roman];
            final += roman;
        }
    }
    return final;
}

convertToRoman(36);
