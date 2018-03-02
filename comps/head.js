import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export class MyHead extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            rel="stylesheet"
          />
        </Head>
        <style jsx global>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    )
  }
}
