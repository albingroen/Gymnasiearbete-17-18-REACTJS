import React from 'react'
import Link from 'next/link'
import { Button } from '../comps/button.js'
import { Nav } from '../comps/nav.js'
import { Input } from '../comps/input.js'
import { Scrollhint } from '../comps/scrollHint.js'

class Index extends React.Component {
  state = { name: null } // här är vad `this.state.name` är satt till i början
  componentDidMount() {
    if (process.browser) {
      const name = window.prompt('Name?')
      this.setState({ name: name })
    }
  }
  render() {
    const { name } = this.state
    return (
      <div>
        <div>name: {name}</div>

        <Nav />
        {/* <h1>{name}</h1> */}
        <div className="header">
          <div className="headerContent">
            <h1 className="title">Search for summoner</h1>
            <p className="about-site">
              Enter a summoner name to recieve to most necessary information
              about the player.
            </p>
            <Input />
            <Scrollhint />
            <style jsx global>{`
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
            padding-left: 30px;
            padding-right: 30px;
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
            font-weight: 300!important;
            letter-spacing: .5px; 
          }
          .about-site {
            font-family: 'Lato', sanss-serif;
            font-weight: 400;
            font-size: 17px;
            width: 400px            
            margin-bottom: 70px;
            opacity: .5;
          }
        `}</style>
          </div>
        </div>
        <div className="content">
          <style jsx>{`
            .content {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              height: 50vh;
              width: 100%;
              background: rgb(250, 250, 250);
              border-top: 1px solid rgb(234, 234, 234);
            }
          `}</style>
        </div>
      </div>
    )
  }
}

export default Index
