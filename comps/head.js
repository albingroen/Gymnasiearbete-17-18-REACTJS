import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export class MyHead extends React.Component {
  render() {
    return (
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        />
      </Head>
    )
  }
}
