import React from 'react'
import Link from 'next/link'
import { Button } from '../comps/button.js'
import { Nav } from '../comps/nav.js'
import { Input } from '../comps/input.js'
import { MyHead } from '../comps/head.js'
import Head from 'next/head'

class Index extends React.Component {
  render() {
    return (
      <div>
        <MyHead />
        <Head>
          <title>Start</title>
        </Head>
        <Nav />
        <div className="header">
          <div className="headerContent">
            <h1 className="title">Search for summoner...</h1>
            <Input />
          </div>
        </div>
        <div className="browse" />
        <style jsx global>{`
          body {
            background: #f7f7f7;
            padding: 0;
            margin: 0;
          }
        `}</style>
        <style jsx>{`
          * {
            padding: 0;
            margin: 0;
          }
          .header {
            width: 70%;
            background: #f7f7f7;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            height: 70vh;
            align-items: center;
          }
          .headerContent {
            height: 363px;
            width: 400px;
            background: white;
            border-radius: 2px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 25px;
            -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
          }
          .title {
            font-size: 25px;
            color: #222;
            font-family: 'Open sans', sans-serif;
            text-align: left;
            font-weight: normal;
            align-self: flex-start;
          }
          .browse {
            width: 100%;
            height: 1000px;
            background: white;
          }
        `}</style>
      </div>
    )
  }
}

export default Index
