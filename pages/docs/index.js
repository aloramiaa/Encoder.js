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
    
        <Head>
            <title>{translate.raw('static_HyaqSc')}</title>
            <meta name="description" content={translate.raw('static_vZeKeO')} />
            <meta property="og:title" content={translate.raw('static_8hiseu')} />
            <meta
            property="og:description"
            content={translate.raw('static_dx8wHO')}
            />
            <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9819bb2f-010c-481e-936e-0ff85d44f8ab/ce7a1bbd-65e8-43c4-a8b3-8f0776d2b099?org_if_sml=1&amp;force_format=original"
            />
        </Head>
        <h1>docs, w.i.p.</h1>

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
