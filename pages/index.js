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
        <div className="content">
          <div className="header">
            {/* <Nav /> */}

            <div className="headerContent">
              <h1 className="title">
                Welcome human...<br />Search summoner down below.
              </h1>

              <Input />
            </div>
            <style jsx global>{`
              * {
                padding: 0;
                margin: 0;
              }
              body {
                background-image: url('/static/Images/lol-bg-new.png');
                background-size: cover;
                background-position: center;
              }
            `}</style>
            <style jsx>{`
              body {
                background: #1886e6;
              }
              .content {
                width: 100%;
                margin: 0 auto;
                display: none;
                margin: 0;
              }
              .header {
                height: 100vh;
                width: 85%;
                display: flex;
                justify-content: center;
                margin: 0 auto;

                flex-direction: column;
              }

              .title {
                color: #222;
                font-family: 'Roboto', sans-serif;
                font-weight: normal;
                font-size: 50px;
                margin-bottom: 75px;
                letter-spacing: 0.5px;
                color: white;
                font-weight: lighter;
                line-height: 70px;
              }
            `}</style>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
