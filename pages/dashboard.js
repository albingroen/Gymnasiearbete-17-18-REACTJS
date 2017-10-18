import React from 'react'
import Link from 'next/link'
import { Nav } from '../comps/nav.js'
import { About } from '../comps/aboutsummoner.js'
import 'isomorphic-fetch'

export default class dashboard extends React.Component {
  static async getInitialProps() {
    let APIkey = 'RGAPI-d1aca85d-8b27-484e-b5f5-aabb485a5615'
    const res = await fetch(
      'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/mevlut?api_key=' +
        // 'https://na1.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/53292464?api_key=' +
        APIkey,
    )
    const json = await res.json()
    console.log('info', json)
    return { name: json.name, level: json.summonerLevel }
  }
  render() {
    return (
      <div>
        <Nav />
        <About name={this.props.name} level={this.props.level} />
        <div className="line" />
        <div className="contenth">
          <div className="header">
            <div className="headerContent">
              <h1 className="title">Latest games</h1>
              <p className="about-site">
                This is a summary of the latest games<br />played by this
                specific summoner.
              </p>
              {/* <p>{this.props.info}</p> */}
            </div>
            <style jsx global>{`
              .contenth {
                width: 80%;
                margin: 0 auto;
                display: flex;
                justify-content: center;
              }
              * {
                padding: 0;
                margin: 0;
              }

              .header {
                margin-top: 100px;
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
              .line {
                height: 0.5px;
                background: rgba(0, 0, 0, 0.1);
                width: 100%;
                margin-top: 10px;
              }
            `}</style>
          </div>
        </div>
      </div>
    )
  }
}
