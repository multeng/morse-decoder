const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let i = 0;
    let j = 10;
    let sliceExpr = '';
    let result = '';
    let morze = '';
    while (i < expr.length) {
        sliceExpr = expr.slice(i, j)
        if (sliceExpr == '**********') {
            result += ' ';
        } else {
            for (let index = 0; index < sliceExpr.length; index += 2) {
                if (sliceExpr.slice(index, index + 2) == '11') {
                    morze += '-';
                }
                if (sliceExpr.slice(index, index + 2) == '10') {
                    morze += '.';
                }
            }
            result += MORSE_TABLE[morze];
        }
        morze = '';
        i += 10;
        j += 10;
    }
    return result;
}

module.exports = {
    decode
}