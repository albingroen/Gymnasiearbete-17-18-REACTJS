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
      <div className="contentd">
        <ul>
          <li>
            <h3 className="summonerName">{this.props.name}</h3>
          </li>
          <li>
            <p>Level</p>
            <h3 className="summonerLevel">{this.props.level}</h3>
          </li>
          <li>
            <p>League</p>
            <h3 className="summonerLane">
              {this.props.tier}
              {this.props.rank}
            </h3>
          </li>
          <li>
            <p>Wins</p>
            <h3 className="summonerScore">87</h3>
          </li>
          <li>
            <p>Ranked</p>
            <h3>56</h3>
          </li>
        </ul>
        <style jsx>{`
          .contentd {
            display: flex;
            width: 80%;
            margin: 0 auto;
            justify-content: center;
          }
          ul,
          li {
            display: inline-block;
          }
          li {
            padding: 30px;
            color: white;
          }
          @media screen and (max-width: 1000px) {
            .contentd {
              width: 80%;
            }
          }
          h3,
          p {
            font-weight: normal;
            font-family: 'Roboto', sans-serif;
          }
          p {
            opacity: 0.5;
            margin-bottom: 10px;
            letter-spacing: 1px;
          }
        `}</style>
      </div>
    )
  }
}
