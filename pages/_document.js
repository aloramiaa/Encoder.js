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

import Document, { Html, Head, Main, NextScript } from 'next/document';

const EncoderURL = process.env.scriptURL/*'https://js.is-a.dev/encoder/latest'*/;

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;  -webkit-font-smoothing: antialiased;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;  color: inherit;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}details {  display: block;  margin: 0;  padding: 0;}summary::-webkit-details-marker {  display: none;}[data-thq="accordion"] [data-thq="accordion-content"] {  max-height: 0;  overflow: hidden;  transition: max-height 0.3s ease-in-out;  padding: 0;}[data-thq="accordion"] details[data-thq="accordion-trigger"][open] + [data-thq="accordion-content"] {  max-height: 1000vh;}details[data-thq="accordion-trigger"][open] summary [data-thq="accordion-icon"] {  transform: rotate(180deg);}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-theme-neutral-dark);\n    background: var(--dl-color-theme-neutral-light);\n    \n    fill: var(--dl-color-theme-neutral-dark);\n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://unpkg.com/animate.css@4.1.1/animate.css"
          ></link>
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png"/>
          <link rel="manifest" href="/img/site.webmanifest"/>
          <meta property="og:type" content="website" />
          <meta name="yandex-verification" content="22aaaca224baf8f7" />
          <meta
            property="og:image"
            content="https://encoder.js.is-a.dev/img/banner.png"
          />
          <meta property="vk:image" content="http://encoder.js.is-a.dev/img/banner.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@200;300;400;500;600;700;800&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '</noscript>\n        <style>[data-thq="thq-dropdown"]:hover > [data-thq="thq-dropdown-list"] {\n    display: flex;\n  }\n\n  [data-thq="thq-dropdown"]:hover > div [data-thq="thq-dropdown-arrow"] {\n    transform: rotate(90deg);\n  }</style><noscript>',
            }}
          ></noscript>
          <div dangerouslySetInnerHTML={{
            __html:
              `<!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLXYYLEN9F"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLXYYLEN9F');
          </script>
          <!-- End Google tag -->
          <script src="https://analytics.juststudio.is-a.dev/encoder"></script>`
          }}></div>
        </Head>
        <body>
          <a href="https://juststudio.is-a.dev/" rel="noreferrer noopener" className="h-logo-link">
            <img src="/img/logo.png" alt="JustStudio." className="h-logo" />
          </a>
          <Main></Main>
          <NextScript></NextScript>
          <div
            dangerouslySetInnerHTML={{
              __html:
                `<script type="text/javascript">\n    document.ondragstart = noselect;\n    document.onselectstart = noselect;\n    document.oncontextmenu = noselect;\n    function noselect() {return false;}\n</script>\n        <script defer src=\'https://unpkg.com/@teleporthq/react-components/dist/animate-on-reveal.umd.js\'></script><script type="module" src=\'${EncoderURL}\'></script><script type="module" defer>
                  import {encode, decode} from "${EncoderURL}"; 
                  let decodeError = false;
                  const customDecode = (text, key) => {
                    decodeError = false;
                    try {
                      return decode(text, key);
                    } catch (err) {
                      decodeError = true;
                      let errstr = \`\${err}\`.replace('Error: Encoder.js ', '');
                      if (window.location.pathname == "/ru") {
                        errstr = "Произошла ошибка: Текст, подлежащий декодированию, закодирован неправильно."
                      } else if (window.location.pathname == "/fr") {
                        errstr = "Erreur: Le texte que vous souhaitez décoder n'est pas encodé correctement.";
                      } else if (window.location.pathname == "/ua") {
                        errstr = "Помилка: Текст, що підлягає декодуванню, неправильно закодований.";
                      } else if (window.location.pathname == "/bn") {
                        errstr = "ত্রুটি: যে স্ট্রিংটি ডিকোড করা হবে তা সঠিকভাবে এনকোড করা হয়নি।";
                      }
                      return errstr;
                    }
                  }
                  const elem1 = document.getElementById("input");
                  const elem2 = document.getElementById("output");
                  const elem3 = document.getElementById("key");
                  const elem4 = document.getElementById("mode");
                  const update = () => { 
                    const mode = elem4.value; 
                    const output = elem2; 
                    const key = elem3.value;
                    const input = elem1.value;
                    output.value = input ? (mode === "encode" ? encode(input, key, true) : customDecode(input, key)) : ""; 
                    if (decodeError) {
                      output.classList.add('outputerror');
                      decodeError = false;
                    } else {try{
                      output.classList.remove('outputerror');
                    }catch(e){console.warn(e);}}
                  }
                  elem1.addEventListener("input", update);
                  elem2.addEventListener("input", update);
                  elem3.addEventListener("input", update);
                  elem4.addEventListener("input", update);
                </script>`,
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
