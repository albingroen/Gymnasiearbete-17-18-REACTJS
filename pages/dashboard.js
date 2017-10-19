import React from 'react'
import Link from 'next/link'
import { Nav } from '../comps/nav.js'
import { About } from '../comps/aboutsummoner.js'
import 'isomorphic-fetch'

export default class dashboard extends React.Component {
  static async getInitialProps() {
    const APIkey = 'RGAPI-2fff2e48-dcc8-4f82-8dc7-a65594d189d8'
    const region = 'na1'
    const name = 'oscar'
    const summonerRequest = await fetch(
      `https://${region}.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${APIkey}`,
    )
    const summoner = await summonerRequest.json()
    const recentRequest = await fetch(
      `https://${region}.api.riotgames.com/lol/match/v3/matchlists/by-account/${summoner.accountId}/recent?api_key=${APIkey}`,
    )

    const recent = await recentRequest.json()
    console.log(recent)

    return {
      name: summoner.name,
      level: summoner.summonerLevel,
      recentMatches: recent.matches,
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <About
          name={this.props.name}
          level={this.props.level}
          score={this.props.score}
        />
        <div className="line" />

        <div className="contenth">
          <div className="header">
            <div className="headerContent">
              <h1 className="title">Latest games</h1>
              <p className="about-site">
                This is a summary of the latest games<br />played by this
                specific summoner.
              </p>
              {this.props.recentMatches.map(match => {
                return <div>{match.lane}</div>
              })}
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
