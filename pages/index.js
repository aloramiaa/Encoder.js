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

import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

import { useGlobalContext } from '@/global-context'

const Home = (props) => {
  const { locale, locales } = useGlobalContext()
  const translate = useTranslations()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>{translate.raw('static_HyaqSc')}</title>
          <meta name="description" content={translate.raw('static_vZeKeO')} />
          <meta property="og:title" content={translate.raw('static_8hiseu')} />
          <meta
            property="og:description"
            content={translate.raw('static_dx8wHO')}
          />
        </Head>
        <animate-on-reveal
          animation="jello"
          duration="300ms"
          delay="0s"
          direction="normal"
          easing="ease-in-out"
          iteration="1"
        >
          <span data-thq-animate-on-reveal="true" className="home-name">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_-XONHh'),
              }}
            ></span>
          </span>
        </animate-on-reveal>
        <div
          data-thq="thq-dropdown"
          className="home-language-switcher list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="home-language-switcher-toggle"
          >
            <span className="home-language-name">{locale?.['name']}</span>
            <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow">
              <svg
                fill="#6e3bf3"
                viewBox="0 0 1024 1024"
                className="home-icon1"
              >
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="home-language-switcher-list"
          >
            <div>
              {locales.map((all_languages, index) => (
                <Link href={`${process.env.URLprefix}${locales[index].short}`.replace(/\/(.*?)\/(.*?)/, '/$2').replace(locale?.['short'], '').replace('/coder', '/encoder')} key={`lang-link-${index}`}>
                  <Fragment>
                    <Link href={`${process.env.URLprefix}${locales[index].short}`.replace(/\/(.*?)\/(.*?)/, '/$2').replace(locale?.['short'], '').replace('/coder', '/encoder')} key={`inner-lang-link-${index}`}>
                      <div className="home-language-switcher-item">
                        <span className="home-language-link">
                          {all_languages?.name}
                        </span>
                      </div>
                    </Link>
                  </Fragment>
                </Link>
              ))}
            </div>
          </ul>
        </div>
        <div className="home-main">
          <div className="home-input">
            <span className="home-text1">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_KZFk8S'),
                }}
              ></span>
            </span>
            <textarea
              id="input"
              name="input"
              autoFocus
              placeholder={translate.raw('text-6')}
              className="home-textarea1 textarea"
            ></textarea>
          </div>
          <div className="home-input">
            <span className="home-text1">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text-5'),
                }}
              ></span>
            </span>
            <textarea
              id="key"
              name="key"
              placeholder={translate.raw('text-7')}
              className="home-textarea1 textarea keyinputthing"
            ></textarea>
          </div>
          <div className="home-output">
            <span className="home-text2">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Vcjrr0'),
                }}
              ></span>
            </span>
            <textarea
              id="output"
              name="output"
              placeholder={translate.raw('text-8')}
              className="home-textarea2 textarea"
            ></textarea>
          </div>
          <div className="home-mode __just_select">
            <label htmlFor="mode" className="home-text3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_v-MT8j'),
                }}
              ></span>
            </label>
            <select id="mode" className="home-select __just_se1ect">
              <option value="encode"
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text-1'),
                }}
              ></option>
              <option value="decode"
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text-2'),
                }}
              ></option>
            </select>
          </div>
          <div className="home-buttons">
            <animate-on-reveal
              animation="fadeInDown"
              duration="750ms"
              delay="0s"
              direction="normal"
              easing="ease-in-out"
              iteration="1"
            >
              <Link href="https://github.com/JustStudio7/Encoder" target="_blank">
                <button
                  type="button"
                  data-thq-animate-on-reveal="true"
                  className="home-button button hideOn322"
                >
                  <span className="home-text4">
                    <span className="home-text5"
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text-9'),
                      }}
                    ></span>
                    <span></span>
                    <span className="home-text7">↗</span>
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text-0'),
                    }}
                  ></span>
                </button>
              </Link>
              <Link href={`/${locale?.['short']}/docs`}>
                <button
                  type="button"
                  data-thq-animate-on-reveal="true"
                  className="home-button button"
                >
                  <span className="home-text4">
                    <span className="home-text5"
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text-4'),
                      }}
                    ></span>
                    <span className='removethat'></span>
                    <span className="home-text7 removethat">↗</span>
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_S-x5go'),
                    }}
                  ></span>
                </button>
              </Link>
            </animate-on-reveal>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.72) 0%,
                rgba(0, 0, 0, 0.72) 100%
              ),
              linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .home-name {
            color: #ffffff;
            width: auto;
            height: auto;
            font-size: 30px;
            font-family: 'Rubik';
            margin-bottom: 20px;
          }
          .home-language-switcher {
            top: 10px;
            right: 10px;
            cursor: pointer;
            display: inline-block;
            position: fixed;
            border-radius: var(--dl-radius-radius-radius2);
            background-color: #00000033;
          }
          .home-language-switcher-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-language-name {
            fill: #6e3bf3;
            color: #6e3bf3;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .home-dropdown-arrow {
            transition: 0.3s;
          }
          .home-icon1 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .home-language-switcher-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #00000044;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .home-language-switcher-item {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.15);
          }
          .home-language-link {
            color: #ffffff;
          }
          .home-main {
            gap: 1em;
            display: flex;
            padding: 15px;
            position: relative;
            max-width: 75%;
            min-width: 50%;
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
            align-items: center;
            border-radius: 20px;
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: flex-start;
            background-color: rgba(0, 0, 0, 0.3);
            animation-duration: 1s;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in-out;
          }
          .home-input {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text1 {
            color: rgb(255, 255, 255);
            grid-row-end: 2;
            animation-name: fadeInUp;
            grid-row-start: 1;
            animation-delay: 200ms;
            grid-column-end: 2;
            grid-column-start: 1;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in-out;
          }
          .home-textarea1 {
            color: #ffffff;
            width: 100%;
            height: 90px;
            overflow: visible;
            max-width: 100%;
            min-width: 100%;
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.21);
            max-height: 190px;
            min-height: 36px;
            transition: 0.3s;
            border-color: rgba(255, 255, 255, 0.23);
            border-radius: 1rem;
            background-color: rgba(0, 0, 0, 0.17);
          }
          .home-textarea1:focus {
            fill: #fff;
            color: #ffffff;
            box-shadow: 5px 5px 30px -5px rgba(110, 59, 243, 0.37);
            border-color: #6e3bf3;
          }
          .home-textarea1:hover {
            box-shadow: 5px 5px 10px 0px rgba(109, 109, 109, 0.37);
            border-color: rgba(255, 255, 255, 0.47);
          }
          .home-textarea1:active {
            box-shadow: 5px 5px 10px 0px rgba(255, 255, 255, 0.21);
            border-color: #ffffff;
          }
          .home-textarea1:disabled {
            color: rgba(255, 255, 255, 0.57);
            opacity: 0.5;
          }
          .home-output {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text2 {
            color: rgb(255, 255, 255);
            grid-row-end: 2;
            animation-name: fadeInUp;
            grid-row-start: 1;
            animation-delay: 200ms;
            grid-column-end: 2;
            grid-column-start: 1;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in-out;
          }
          .home-textarea2 {
            color: #ffffff;
            width: 100%;
            height: 90px;
            overflow: visible;
            max-width: 100%;
            min-width: 100%;
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.21);
            max-height: 190px;
            min-height: 36px;
            transition: 0.3s;
            border-color: rgba(255, 255, 255, 0.23);
            border-radius: 1rem;
            background-color: rgba(0, 0, 0, 0.17);
          }
          .home-textarea2:focus {
            fill: #fff;
            color: #ffffff;
            box-shadow: 5px 5px 30px -5px rgba(110, 59, 243, 0.37);
            border-color: #6e3bf3;
          }
          .home-textarea2:hover {
            box-shadow: 5px 5px 10px 0px rgba(109, 109, 109, 0.37);
            border-color: rgba(255, 255, 255, 0.47);
          }
          .home-textarea2:active {
            box-shadow: 5px 5px 10px 0px rgba(255, 255, 255, 0.21);
            border-color: #ffffff;
          }
          .home-textarea2:disabled {
            color: rgba(255, 255, 255, 0.57);
            opacity: 0.5;
          }
          .home-mode {
            display: flex;
            margin-top: 1em;
            align-items: center;
            padding-top: 1em;
            border-color: rgba(255, 255, 255, 0.65);
            border-width: 1px;
            padding-left: 1rem;
            padding-right: 1rem;
            flex-direction: row;
            justify-content: center;
            border-top-width: 3px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text3 {
            color: #ffffff;
          }
          .home-select {
            width: 100%;
            margin-left: 10%;
            padding-left: 5px;
            border-radius: 5px;
            padding-right: 5px;
          }
          .home-buttons {
            top: 100%;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: auto;
            display: flex;
            position: absolute;
            margin-top: 1em;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-button {
            color: rgb(255, 255, 255);
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.22);
            transition: 0.3s;
            border-color: #ffffff;
            border-width: 0px;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.28);
          }
          .home-button:hover {
            box-shadow: 5px 5px 10px 0px rgba(113, 113, 113, 0.22);
            border-color: #ffffff;
            border-width: 0px;
            background-color: rgba(115, 115, 115, 0.28);
          }
          .home-button:active {
            box-shadow: 5px 5px 10px 0px rgba(110, 59, 243, 0.5);
            border-color: #6e3bf3;
            background-color: rgba(110, 59, 243, 0.6);
          }
          .home-text4 {
            gap: 5px;
            display: flex;
            font-size: 20px;
            align-self: flex-start;
            align-items: flex-start;
            font-family: 'Rubik';
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text5 {
            font-size: 18px;
          }
          .home-text7 {
            color: #6e3bf3;
            font-size: 14px;
            font-family: 'Rubik';
            line-height: 1;
          }
          .keyinputthing {
            height: 17px;
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
