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





/* ========================================== */
/* Cash Register */
var denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;

    // Transform CID array into drawer object
    var register = cid.reduce(
        function (acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        },
        { total: 0 }
    );

    // Handle exact change
    if (register.total === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    // Handle obvious insufficient funds
    if (register.total < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Loop through the denomination array
    var change_arr = denom.reduce(function (acc, curr) {
        var value = 0;
        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change remaining
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            // Round change to the nearest hundreth deals with precision errors
            change = Math.round(change * 100) / 100;
        }
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Here is your change, ma'am.
    output.status = "OPEN";
    output.change = change_arr;
    return output;
}

// test here
checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
]);
