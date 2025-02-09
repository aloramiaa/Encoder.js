/*

MIT License

Copyright (c) 2025 JustStudio. <https://juststudio.is-a.dev/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

// Encoder.js v1.0.0 

/*

 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░███████╗███╗░░██╗░█████╗░░█████╗░██████╗░███████╗██████╗░░░░░░░░░██╗░██████╗░░
░░██╔════╝████╗░██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗░░░░░░░░██║██╔════╝░░
░░█████╗░░██╔██╗██║██║░░╚═╝██║░░██║██║░░██║█████╗░░██████╔╝░░░░░░░░██║╚█████╗░░░
░░██╔══╝░░██║╚████║██║░░██╗██║░░██║██║░░██║██╔══╝░░██╔══██╗░░░██╗░░██║░╚═══██╗░░
░░███████╗██║░╚███║╚█████╔╝╚█████╔╝██████╔╝███████╗██║░░██║██╗╚█████╔╝██████╔╝░░
░░╚══════╝╚═╝░░╚══╝░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░╚════╝░╚═════╝░░░
 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/

// Made by JustStudio.

/*
████████████████████████████████████████████████████████████████
███▄─▄█▄─██─▄█─▄▄▄▄█─▄─▄─█─▄▄▄▄█─▄─▄─█▄─██─▄█▄─▄▄▀█▄─▄█─▄▄─█████
█─▄█─███─██─██▄▄▄▄─███─███▄▄▄▄─███─████─██─███─██─██─██─██─█░░██
▀▄▄▄▀▀▀▀▄▄▄▄▀▀▄▄▄▄▄▀▀▄▄▄▀▀▄▄▄▄▄▀▀▄▄▄▀▀▀▄▄▄▄▀▀▄▄▄▄▀▀▄▄▄▀▄▄▄▄▀▄▄▀▀
*/

function checkNum0(num) {
    let data001 = `${num}`;
    let data002 = 'found';
    let data003 = data001.replaceAll('.', data002).replaceAll(',', data002);
    let data004 = false;
    if (data001 == data003) {
        data004 = true;
    }
    return data004;
}

function checkNum1(num) {
    let data005 = checkNum0(num / 2);
    let data006 = checkNum0(num / 3);
    let data007 = checkNum0(num / 4);
    let data008 = checkNum0(num / 5);
    let data009 = checkNum0(num / 6);
    let data010 = checkNum0(num / 7);
    let data011 = checkNum0(num / 8);
    let data012 = checkNum0(num / 9);
    return [
        data005,
        data006,
        data007,
        data008,
        data009,
        data010,
        data011,
        data012
    ];
}

function encode0(str) {
    let data013 = checkNum1(str.length);
    let result = [];

    for (let i = 2; i <= 9; i++) {
        if (data013[i - 2]) {
            let partLength = Math.floor(str.length / i);
            let parts = [];

            for (let j = 0; j < i; j++) {
                parts.push(str.slice(j * partLength, (j + 1) * partLength));
            }

            result.push(parts);
        }
    }

    const flatResult = result.flat();
    const duplicates = flatResult.filter((item, index) => flatResult.indexOf(item) !== index);
    const uniqueDuplicates = [...new Set(duplicates)];
    const duplicateIds = {};

    uniqueDuplicates.forEach((duplicate, index) => {
        duplicateIds[duplicate] = index + 1;
    });

    let encodedStr = str;
    uniqueDuplicates.forEach(duplicate => {
        encodedStr = encodedStr.replaceAll(duplicate, `'${duplicateIds[duplicate]}'`);
    });

    let duplicateTable = Object.entries(duplicateIds).map(([key, value]) => `!${value},${key}`).join(' ');

    return { encodedStr, duplicateTable };
}

function decode0(encodedStr, duplicateTable) {
    const duplicateEntries = duplicateTable.split(' ').map(entry => {
        const [id, value] = entry.split(',');
        return { id: id.replace('!', ''), value };
    });

    let decodedStr = encodedStr;

    duplicateEntries.forEach(({ id, value }) => {
        decodedStr = decodedStr.replaceAll(`'${id}'`, value);
    });

    return decodedStr;
}

function encode1(input, useURLSAFEspecialCharacters) {
  
  
    input = input || 'Made by JustStudio.'
    let encoded = '';
    let data = 0;
    let dataChar = "A";
    function containsNoNumbers(input) {
        for (let i = 0; i < input.length; i++) {
            if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
                return false;
            }
        }
        return true;
    }
    try {
      if (btoa(input).length < input.length) {
        data = 1;
        input = btoa(input);
      }
    } catch {}
    try {
      function compressStringRegex(str) {
          return str.replace(
              /(.)\1*/g,
              (match, char) =>
                  char + match.length);
      }
      if (compressStringRegex(input).length < input.length && containsNoNumbers(input)) {
        input = compressStringRegex(input);
        if (data == 0) {
          data = 2;
        } else if (data == 1) {
          data = 3;
        }
      }
    } catch {}
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i).toString();
        while (charCode.length < 5) {
            charCode = '0' + charCode;
        }
        encoded += charCode;
    }
    if (data == 1) {
      dataChar = "a";
    } else if (data == 2) {
      dataChar = "B";
    } else if (data == 3) {
      dataChar = "b";
    }
    encoded = encoded
      .replaceAll('0000', 'b')
      .replaceAll('000', 'A')
      .replaceAll('00', 'a')
      .replaceAll('1111', 'B')
      .replaceAll('111', 'c')
      .replaceAll('11', 'C')
      .replaceAll('a1', 'd')
      .replaceAll('08', 'D')
      .replaceAll('ac', 'E')
      .replaceAll('Dd', 'e')
      .replaceAll('32', 'f')
      .replaceAll('A6', 'F')
      .replaceAll('F9', 'g')
      .replaceAll('01', 'G')
      .replaceAll('A97', 'h')
      .replaceAll('d05', 'i')
      .replaceAll('A74', 'J')
      .replaceAll('A99EaCAC5aC6', 'I')
      .replaceAll('deGaC6', 'j')
      .replaceAll('aC8haC4', 'k')
      .replaceAll('d02EaC4', 'K')
      .replaceAll('aC9d04ideG', 'L')
      .replaceAll('aC4dGaC6aC7aC4aC0', 'l')
      .replaceAll('dbcA99aC7d09dGaCAC6', 'M')
      .replaceAll('aC9iaCA1bcaC9', 'm')
      .replaceAll('aC6aC4aC7dG', 'N')
      .replaceAll('d02hdDaC5dG', 'n')
      .replaceAll('Af', 'O')
      .replaceAll('aCAC7deD', 'o')
      .replaceAll('id02', 'p')
      .replaceAll('dGdDaC5dG', 'P')
      .replaceAll('A40', 'Q')
      .replaceAll('A41', 'q')
      .replaceAll('A39', 'R')
      .replaceAll('dDEA99hdD', 'r')
      .replaceAll('d03dDEA98hdD', 'S')
      .replaceAll('aC6d04dGaC0', 's')
      .replaceAll('dGaCA1a', 't')
      .replaceAll('A59', 'T')
      .replaceAll('aC', 'U')
      .replaceAll('Gd', 'u')
      .replaceAll('du', 'v')
      .replaceAll('4d', 'V')
      .replaceAll('VG', 'w')
      .replaceAll('U5', 'W')
      .replaceAll('U6', 'X')
      .replaceAll('OX', 'x')
      .replaceAll('9EU', 'Y')
      .replaceAll('eb', 'y')
      .replaceAll('ve', 'z')
      .replaceAll('DE', 'Z');
    if (useURLSAFEspecialCharacters) {
      encoded = encoded
        .replaceAll('A4', '-')
        .replaceAll('d04', '_');
      let encoded2 = encoded
        .replace(/(.+?)\1+/g, (match, char) => `(${char}.${match.length / char.length})`)
        .replaceAll(')(', '~');
      if (encoded2.length < encoded.length) {
        encoded = encoded2;
      }
    }
  let output = dataChar+encoded;
    return output;
}

function decode1(encoded) {
  
  
  
    encoded = `${encoded}`;
    let decoded = '';
    let dataChar = encoded.slice(0,1);
    let data = 0;
    let doDecompress = false;
    let doATOB = false;
    if (dataChar == "a") {
      data = 1;
      doATOB = true;
    } else if (dataChar == "B") {
      data = 2;
      doDecompress = true;
    } else if (dataChar == "b") {
      data = 3;
      doDecompress = true;
      doATOB = true;
    }
    encoded = encoded
      .slice(1)
      .replaceAll('~', ')(')
      .replace(/\((.+?)\.(\d+)\)/g, (_, char, count) => char.repeat(count))
      .replaceAll('_', 'd04')
      .replaceAll('-', 'A4')
      .replaceAll('Z', 'DE')
      .replaceAll('z', 've')
      .replaceAll('y', 'eb')
      .replaceAll('Y', '9EU')
      .replaceAll('x', 'OX')
      .replaceAll('X', 'U6')
      .replaceAll('W', 'U5')
      .replaceAll('w', 'VG')
      .replaceAll('V', '4d')
      .replaceAll('v', 'du')
      .replaceAll('u', 'Gd')
      .replaceAll('U', 'aC')
      .replaceAll('T', 'A59')
      .replaceAll('t', 'dGaCA1a')
      .replaceAll('s', 'aC6d04dGaC0')
      .replaceAll('S', 'd03dDEA98hdD')
      .replaceAll('r', 'dDEA99hdD')
      .replaceAll('R', 'A39')
      .replaceAll('q', 'A41')
      .replaceAll('Q', 'A40')
      .replaceAll('P', 'dGdDaC5dG')
      .replaceAll('p', 'id02')
      .replaceAll('o', 'aCAC7deD')
      .replaceAll('O', 'Af')
      .replaceAll('n', 'd02hdDaC5dG')
      .replaceAll('N', 'aC6aC4aC7dG')
      .replaceAll('m', 'aC9iaCA1bcaC9')
      .replaceAll('M', 'dbcA99aC7d09dGaCAC6')
      .replaceAll('l', 'aC4dGaC6aC7aC4aC0')
      .replaceAll('L', 'aC9d04ideG')
      .replaceAll('K', 'd02EaC4')
      .replaceAll('k', 'aC8haC4')
      .replaceAll('j', 'deGaC6')
      .replaceAll('I', 'A99EaCAC5aC6')
      .replaceAll('J', 'A74')
      .replaceAll('i', 'd05')
      .replaceAll('h', 'A97')
      .replaceAll('G', '01')
      .replaceAll('g', 'F9')
      .replaceAll('F', 'A6')
      .replaceAll('f', '32')
      .replaceAll('e', 'Dd')
      .replaceAll('d', 'a1')
      .replaceAll('D', '08')
      .replaceAll('E', 'ac')
      .replaceAll('a', '00')
      .replaceAll('A', '000')
      .replaceAll('b', '0000')
      .replaceAll('B', '1111')
      .replaceAll('c', '111')
      .replaceAll('C', '11');
    for (let i = 0; i < encoded.length; i += 5) {
        let charCode = encoded.substring(i, i + 5);
        decoded += String.fromCharCode(parseInt(charCode, 10));
    }
    if (doDecompress) {
      function decompress(str) {
        return str.replace(/(\D)(\d+)/g, (_, g1, g2) => g1.repeat(g2));
      }
      decoded = decompress(decoded);
    }
    if (doATOB) {
      decoded = atob(decoded);
    }
    return decoded;
}

function encode2(text_, useURLSAFEspecialCharacters) {
  let preDataENC1 = encode1(text_, useURLSAFEspecialCharacters);
  let { preDataENC2, preDataENC3 } = encode0(preDataENC1);
  let preDataENC4 = `${preDataENC2}:${preDataENC3}`;
  if (preDataENC4.length > preDataENC1.length || !(preDataENC2 && preDataENC3)) {
    preDataENC4 = preDataENC1;
  }
  return preDataENC4;
}

function decode2(text_) {
  let preDataDEC1 = text_.replaceAll(':', 'found');
  if (preDataDEC1 != text_) {
    let preDataDEC2 = text_.split(':');
    let preDataDEC3 = preDataDEC2[0];
    let preDataDEC4 = preDataDEC2[1];
    let preDataDEC5 = decode0(preDataDEC3, preDataDEC4);
    return decode1(preDataDEC5);
  }
  return decode1(preDataDEC1);
}

export const encode = (text, compress) => {
  return encode2(text, compress);
};
export const decode = (text) => {
  return decode2(text);
};
