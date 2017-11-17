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
          <div className="icons">
            <img src="/static/Images/sword-icon-01.png" alt="" />
            <img src="/static/Images/path-icon-01.png" alt="" />
            <img src="/static/Images/tower-icon-01.png" alt="" />
          </div>
          <div className="headerContent">
            <h1 className="title">Search for summoner...</h1>
            <Input />
          </div>
          <p className="dataInfo">
            We get all of our stats from Riotgames™ API.
          </p>
        </div>
        <div className="browse" />
        <style jsx global>{`
          body {
            background: #f7f7f7;
            padding: 0;
            margin: 0;
          }
          .dataInfo {
            font-family: 'Open sans', sans-serif;
            font-weight: normal;
            color: #222;
            opacity: 0.75;
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
            height: 85vh;
            flex-direction: column;
            align-items: center;
          }
          .headerContent {
            height: 350px;
            width: 400px;
            background: white;
            border-radius: 2px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 25px;
            margin-bottom: 40px;
            -webkit-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.05);
            -moz-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.05);
            box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.05);
          }
          .title {
            font-size: 25px;
            color: #222;
            font-family: 'Open sans', sans-serif;
            text-align: left;
            font-weight: normal;
            align-self: flex-start;
          }
          .icons {
            display: flex;
            width: 390px;
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-end;
            margin-bottom: 50px;
          }
          img {
            width: 100px;
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
