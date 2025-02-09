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

let Language;
let upd = true;
let prepathname = "/Encoder"

if (!localStorage.getItem('Language') && window.location.search === '?en') {
    Language = 'en';
    localStorage.setItem('Language', Language);
    upd = false;
} else if (!localStorage.getItem('Language') && window.location.search === '?ru') {
    Language = 'ru';
    localStorage.setItem('Language', Language);
    upd = false
}

if (localStorage.getItem('Language')) {
    Language = localStorage.getItem('Language');
} else {
    const userLang = navigator.language || navigator.userLanguage;
    Language = userLang.includes('ru') ? 'ru' : 'en';
    if (upd) {
        localStorage.setItem('Language', Language);
    }
}

const LangCheck = () => {
    if (window.location.pathname == `${prepathname}/en` && Language === 'en') {
        window.location.pathname = window.location.pathname = `${prepathname}/`;
    } else if (Language === 'ru' && !window.location.pathname == `${prepathname}/ru`) {
        window.location.pathname = `${prepathname}/ru`;
    }
}

setTimeout(()=>LangCheck,10)

setTimeout(() => {
    document.getElementById('l-en').addEventListener('click', function() {
        Language = 'en';
        localStorage.setItem('Language', Language);
        LangCheck();
    });
    
    document.getElementById('l-ru').addEventListener('click', function() {
        Language = 'ru';
        localStorage.setItem('Language', Language);
        LangCheck();
    });
}, 100);
