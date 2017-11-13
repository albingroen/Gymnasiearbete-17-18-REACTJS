import React from 'react'
import Link from 'next/link'
import { Nav } from '../comps/nav.js'
import { About } from '../comps/aboutsummoner.js'
import { MyHead } from '../comps/head.js'
import 'isomorphic-fetch'
import Head from 'next/head'

export default class dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResponse: false,
    }
  }
  async componentWillMount() {
    // Runs everytime a component loads into the client (non-server)
    const region = 'euw1'
    const name = this.props.url.query.userName // this.properties > check the url > check the querys that the url has, and at last, check the query "userName"
    const summonerRequest = await fetch(
      // To avoid CORS, we go through our own API which fetches from riots api (this is in the server.js)
      `/api/${region}/${name}`,
    )

    const summoner = await summonerRequest.json()
    console.log(summoner)
    this.setState({ apiResponse: summoner }) // updates state so the site renders! Makes the render function run again
  }
  render() {
    if (this.state.apiResponse === false) {
      // Since we don't want to render when we haven't gotten all the info yet, it won't return anything until we do!
      return (
        <div>
          <h1 className="header"> Loading... </h1>
          <style jsx>{`
            .header {
              font-family: 'Roboto', sanss-serif;
              font-weight: normal;
              margin-top: 100px;
              widht: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>
        </div>
      )
    }
    return (
      <div>
        <MyHead />
        <Head>
          <title>Summoner: {this.state.apiResponse.name}'s dashboard</title>
        </Head>
        <Nav />
        <About
          name={this.state.apiResponse.name}
          level={this.state.apiResponse.level}
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
              {this.state.apiResponse.recentMatches.map(match => {
                return <p>{match.lane}</p>
              })}
              <p>{this.state.apiResponse.winsInLatestLeague}</p>
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
