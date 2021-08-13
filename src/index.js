const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ''
    let a = [];
    let b = [];
    let c = '';
    for (let i=0; i < expr.length; i+=10) {
        a.push(expr.slice(i, i+10));
    }
    for (i of a) {
        if (i !== '**********') {
            for (let k=0; k < i.length; k += 2) {
                switch (i[k]+i[k+1]) {
                    case '10':
                        c += '.';
                        break;
                    case '11':
                        c += '-'
                        break;
                    default:
                        break;
                }
            }
            b.push(c);
            c = '';
        }
        else {
            b.push(i);
        }
    }

    for (i of b) {
        if (i === '**********') {
            result += ' ';
        }
        else {
            result += MORSE_TABLE[i];
        }
    }
    

    return result;
}

module.exports = {
    decode
}
