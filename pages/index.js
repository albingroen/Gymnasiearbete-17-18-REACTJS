import React from 'react'
import Link from 'next/link'
import { Button } from '../comps/button.js'
import { Nav } from '../comps/nav.js'
import { Input } from '../comps/input.js'
import { Scrollhint } from '../comps/scrollHint.js'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="content">
          <div className="header">
            <div className="headerContent">
              <h1 className="title">Search for summoner</h1>
              <p className="about-site">
                Enter a summoner name to recieve the most<br />necessary
                information about the player.
              </p>
              <Input />
              <Scrollhint />
            </div>
            <style jsx global>{`
              .content {
                width: 80%;
                margin: 0 auto;
                display: flex;
                justify-content: center;
              }
              * {
                padding: 0;
                margin: 0;
              }
              body {
                background: white;
              }
              .header {
                height: 80vh;
                widht: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .headerContent {
                text-align: center;
              }
              .title,
              .about-site {
                color: #222;
                font-family: 'Roboto', sanss-serif;
                font-weight: 400;
                font-size: 40px;
                margin-bottom: 20px;
              }
              .title {
                font-weight: 300 !important;
                letter-spacing: 0.5px;
              }
              .about-site {
                font-family: 'Lato', sanss-serif;
                font-weight: 400;
                font-size: 17px;
                padding-left: 20px;
                padding-right: 20px;
                margin-bottom: 70px;
                opacity: 0.5;
              }
            `}</style>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
