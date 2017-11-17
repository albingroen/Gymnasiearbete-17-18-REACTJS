import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export class About extends React.Component {
  // static async getInitialProps() {
  //   // eslint-disable-next-line no-undef
  //   const res = await fetch(
  //     'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/fearak?api_key=RGAPI-d1aca85d-8b27-484e-b5f5-aabb485a5615',
  //   )
  //   const json = await res.json()
  //   return { info: json.name }
  // }
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h2 className="summonerName">
            <span>Name</span>
            <br />
            {this.props.name}
          </h2>
        </div>
        <div className="container">
          <h2 className="summonerLevel">
            <span>Level</span>
            <br />
            {this.props.level}
          </h2>
        </div>
        <div className="container">
          <h2 className="summonerRank">
            <span>Rank</span>
            <br />
            {this.props.tier} {this.props.rank}
          </h2>
        </div>
        <div className="container">
          <h2 className="summonerWins">
            <span>Wins</span>
            <br />
            {this.props.wins}
          </h2>
        </div>

        {/* <h3 className="summonerName">{this.props.name}</h3> */}

        {/* <h3 className="summonerLevel">{this.props.level}</h3> */}

        {/* <h3 className="summonerLane">
              {this.props.tier}
              {this.props.rank}
            </h3> */}

        {/* <h3 className="summonerScore">87</h3> */}

        <style jsx>{`
          .containerIllustration {
            margin: 0 auto;
            width: 550px;
            height: 200px;
          }
          .wrapper {
            width: 70%;
            padding-top: 50px;
            display: flex;
            flex-direction: row;
            margin: 0 auto;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .container {
            width: 32%;
            height: 110px;
            background: white;
            margin-top: 2%;
            display: flex;
            align-items: center;
            -webkit-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.05);
            -moz-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.05);
            box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.05);
          }
          h2 {
            padding-left: 30px;
            color: #222;
            font-family: 'Open Sans', sans-serif;
            font-weight: normal;
          }
          span {
            font-size: 17px;
            opacity: 0.5;
          }
        `}</style>
      </div>
    )
  }
}
