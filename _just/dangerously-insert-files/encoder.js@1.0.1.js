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

// Encoder.js v1.0.1
// THIS VERSION IS CURRENTLY W.I.P. 

/*

 https://encoder.js.is-a.dev/


 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░███████╗███╗░░██╗░█████╗░░█████╗░██████╗░███████╗██████╗░░░░░░░░░██╗░██████╗░░
░░██╔════╝████╗░██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗░░░░░░░░██║██╔════╝░░
░░█████╗░░██╔██╗██║██║░░╚═╝██║░░██║██║░░██║█████╗░░██████╔╝░░░░░░░░██║╚█████╗░░░
░░██╔══╝░░██║╚████║██║░░██╗██║░░██║██║░░██║██╔══╝░░██╔══██╗░░░██╗░░██║░╚═══██╗░░
░░███████╗██║░╚███║╚█████╔╝╚█████╔╝██████╔╝███████╗██║░░██║██╗╚█████╔╝██████╔╝░░
░░╚══════╝╚═╝░░╚══╝░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░╚════╝░╚═════╝░░░
 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

 Made by JustStudio.                               https://juststudio.is-a.dev/

 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 ██▄─█─█─█─▄▄█▄─▄█─▄▄█▄─▄█─█─█─▄▀█─█─▄─████
 ███─█─█─█▄▄─██─██▄▄─██─██─█─█─█─█─█─█─████
 █▄▄██▄▄▄█▄▄▄██▄██▄▄▄██▄██▄▄▄█▄▄██▄█▄▄▄█▄▄█

*/

function checkchar(char, chars) {
  return chars.some(ch => ch === char);
}
function getcode(char) {
  const codes = {
    'c': 0, 'C': 0, 'd': 0, 'D': 0, 'I': 0,
    'e': 1, 'f': 1, 'g': 1, 'h': 1, 'i': 1,
    'n': 0, 'o': 0, 'Q': 0, 'r': 0, 'T': 0,
    'N': 1, 'p': 1, 'q': 1, 's': 1, 't': 1
  };
  return codes[char] !== undefined ? codes[char] : 2;
}
function character(char, code) {
  const conversionMap = {
    'A': ['c', 'e', 'E'], 'k': ['n', 'N', 'O'],
    'B': ['C', 'f', 'F'], 'l': ['o', 'p', 'P'],
    'a': ['d', 'g', 'G'], 'L': ['Q', 'q', 'R'],
    'b': ['D', 'h', 'H'], 'm': ['r', 's', 'S'],
    'K': ['I', 'i', 'j'], 'M': ['T', 't', 'u']
  };

  if (code == null || code == undefined) {
    for (const [ogchar, chars] of Object.entries(conversionMap)) {
      if (checkchar(char, chars)) {
        return [ogchar, getcode(char)];
      }
    }
    return ['?', getcode(char)];
  }

  for (const [ogchar, chars] of Object.entries(conversionMap)) {
    if (char === ogchar) {
      return chars[code] || chars[0];
    }
  }
}
const used = /^[a-tA-Tu\s]+$/;

const compressionMap = {
  'EN': {
    ' all': '00', ' All': '01', ' ALL': '02', 'all': '03', 'All': '04', 'ALL': '05',
    ' and': '06', ' And': '07', ' AND': '08', 'and': '09', 'And': '10', 'AND': '11',
    ' that': '12', ' That': '13', ' THAT': '14', 'that': '15', 'That': '16', 'THAT': '17',
    ' have': '18', ' Have': '19', ' HAVE': '20', 'have': '21', 'Have': '22', 'HAVE': '23',
    ' for': '24', ' For': '25', ' FOR': '26', 'for': '27', 'For': '28', 'FOR': '29',
    ' not': '30', ' Not': '31', ' NOT': '32', 'not': '33', 'Not': '34', 'NOT': '35',
    ' with': '36', ' With': '37', ' WITH': '38', 'with': '39', 'With': '40', 'WITH': '41',
    ' be': '42', ' Be': '43', ' BE': '44', ' to': '45', ' To': '46', ' TO': '47',
    ' of': '48', ' Of': '49', ' OF': '50', ' in': '51', ' In': '52', ' IN': '53',
    ' it': '54', ' It': '55', ' IT': '56', ' on': '57', ' On': '58', ' ON': '59',
    ' the': '60', ' The': '61', ' THE': '62', 'the': '63', 'The': '64', 'THE': '65',
    ' this': '66', ' This': '67', ' THIS': '68', 'this': '69', 'This': '70', 'THIS': '71',
    ' from': '72', ' From': '73', ' FROM': '74', 'from': '75', 'From': '76', 'FROM': '77',
    'his': '78', 'His': '79', 'HIS': '80', 'her': '81', 'Her': '82', 'HER': '83',
    'what': '84', 'What': '85', 'WHAT': '86', 'about': '87', 'About': '88', 'ABOUT': '89',
    'which': '90', 'Which': '91', 'WHICH': '92', 'when': '93', 'When': '94', 'WHEN': '95',
    'as': '96', 'AS': '97', 'do': '98', 'DO': '99'
  },
  'RU': {
    ' не': '00', ' Не': '01', ' НЕ': '02', ' она': '03', ' Она': '04', ' ОНА': '05',
    ' он': '06', ' Он': '07', ' ОН': '08', 'она': '09', 'Она': '10', 'ОНА': '11',
    ' на': '12', ' На': '13', ' НА': '14', ' они': '15', ' Они': '16', ' ОНИ': '17',
    ' что': '18', ' Что': '19', ' ЧТО': '20', 'что': '21', 'Что': '22', 'ЧТО': '23',
    ' тот': '24', ' Тот': '25', ' ТОТ': '26', 'тот': '27', 'Тот': '28', 'ТОТ': '29',
    ' быть': '30', ' Быть': '31', ' БЫТЬ': '32', 'быть': '33', 'Быть': '34', 'БЫТЬ': '35',
    ' весь': '36', ' Весь': '37', ' ВЕСЬ': '38', 'весь': '39', 'Весь': '40', 'ВЕСЬ': '41',
    ' это': '42', ' Это': '43', ' ЭТО': '44', ' это': '45', ' Это': '46', ' ЭТО': '47',
    ' как': '48', ' Как': '49', ' КАК': '50', 'как': '51', 'Как': '52', 'КАК': '53',
    ' по': '54', ' По': '55', ' ПО': '56', ' но': '57', ' Но': '58', ' НО': '59',
    ' ты': '60', ' Ты': '61', ' ТЫ': '62', ' из': '63', ' Из': '64', ' ИЗ': '65',
    ' мы': '66', ' Мы': '67', ' МЫ': '68', ' за': '69', ' За': '70', ' ЗА': '71',
    ' вы': '72', ' Вы': '73', ' ВЫ': '74', ' же': '75', ' Же': '76', ' ЖЕ': '77',
    ' от': '78', ' От': '79', ' ОТ': '80', ' бы': '81', ' Бы': '82', ' БЫ': '83',
    'так': '84', 'Так': '85', 'ТАК': '86', 'который': '87', 'Который': '88', 'КОТОРЫЙ': '89',
    'этот': '90', 'Этот': '91', 'ЭТОТ': '92', 'когда': '93', 'Когда': '94', 'КОГДА': '95',
    'только': '96', 'Только': '97', 'ТОЛЬКО': '98', 'же ': '99'
  }
}

const errorprefix = 'Encoder.js Error: ';
const errors = [
  `${errorprefix}The string to be decoded is not correctly encoded.`,
  `${errorprefix}Something went wrong.`
]
const errorAtoB1 = "InvalidCharacterError: Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.";
const errorAtoB2 = "InvalidCharacterError: Failed to execute 'atob' on 'Window': The string to be decoded contains characters outside of the Latin1 range.";

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
    .replaceAll('Af', 'O')
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
  if (useURLSAFEspecialCharacters) {
    encoded = encoded
      .replaceAll('A5', 'I')
      .replaceAll('_-', 'j')
      .replaceAll('4O', 'k')
      .replaceAll('d09', 'lm')
      .replaceAll('A99', 'lM')
      .replaceAll('OiO', 'Lm')
      .replaceAll('iUA', 'LM')
      .replaceAll('db', 'N')
      .replaceAll('UA', 'n')
      .replaceAll('EU', 'o')
  }
  let output = dataChar+encoded;
  return output
    .replaceAll('AU', 'K');
}

function decode1(encoded) {
  console.log(`Debug info: ${encoded}`);
  encoded = `${encoded
    .replaceAll('K', 'AU')}`;
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
    .replaceAll('I', 'A5')
    .replaceAll('j', '_-')
    .replaceAll('4O', 'k')
    .replaceAll('lm', 'd09')
    .replaceAll('lM', 'A99')
    .replaceAll('Lm', 'OiO')
    .replaceAll('LM', 'iUA')
    .replaceAll('N', 'db')
    .replaceAll('n', 'UA')
    .replaceAll('o', 'EU')
    .replaceAll('_', 'd04')////////////////////////////////
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

function regextest(text, lang) {
  if (lang == 'RU') {
    return /^[а-яА-ЯёЁ\s]+$/.test(text);
  }
  return !/\d/.test(text);
}
function _compress(text) {
  let txt = text;
  let cID = 0;
  if (regextest(text, 'RU')) {
    cID = 2;
    for (const [key, value] of Object.entries(compressionMap['RU'])) {
      txt = txt.replaceAll(key, value);
    }
  } else if (regextest(text)) {
    cID = 1;
    for (const [key, value] of Object.entries(compressionMap['EN'])) {
      txt = txt.replaceAll(key, value);
    }
  }
  return [txt, cID];
}
function decompress(text, lang) {
  let txt = text;
  if (lang == 'RU') {
    for (const [key, value] of Object.entries(compressionMap['RU'])) {
      txt = txt.replaceAll(value, key);
    }
  } else {
    for (const [key, value] of Object.entries(compressionMap['EN'])) {
      txt = txt.replaceAll(value, key);
    }
  }
  return txt;
}

export const encode = (text, compress) => {
  let datachar;
  const [cpsd, cID] = _compress(text);
  let encd = encode2(text, compress);
  datachar = encd.slice(0,1);
  const enc2 = encode2(cpsd, compress);
  if (compress && enc2.length < encd.length && cID != 0) {
    datachar = enc2.slice(0,1);
    datachar = character(datachar, cID - 1);
    encd = `${datachar}${enc2.slice(1)}`;
  }
  return encd;
};
export const decode = (text) => {
  let datachar = text.slice(0,1);
  if (!used.test(datachar)) {
    throw new Error(errors[0]);
  }
  let encd = text.slice(1);
  let [realdatachar, dataID] = character(datachar, null);
  if (realdatachar == '?') {
    dataID = -1;
    encd = text;
  } else {
    encd = `${realdatachar}${encd}`
  }
  let decd
  try {
    decd = decode2(encd);
  } catch (decodeError) {
    if (decodeError == errorAtoB1 || decodeError == errorAtoB2) {
      throw new Error(errors[0]);
    } else {
      throw new Error(`${errors[1]} (${encode(decodeError, true)})`);
    }
  }
  if (dataID == 0 || dataID == 1) {
    let cLang = dataID == 0 ? 'EN' : 'RU';
    decd = decompress(decd, cLang);
  }
  return decd;
};