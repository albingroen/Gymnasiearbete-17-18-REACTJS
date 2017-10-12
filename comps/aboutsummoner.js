import React from 'react'
import Link from 'next/link'

// export class About extends React.Component {
//   render() {
//     return (
//       <div className="summonerBasicStats">
// <ul>
//   <li>
//     <h3 className="summonerName">Summoner</h3>
//   </li>
//   <li>
//     <p>Rank</p>
//     <h3>Silver IV</h3>
//   </li>
//   <li>
//     <p>Champ</p>
//     <h3>Ashe</h3>
//   </li>
//   <li>
//     <p>Wins</p>
//     <h3>87</h3>
//   </li>
//   <li>
//     <p>Ranked</p>
//     <h3>56</h3>
//   </li>
// </ul>
//         <style jsx>{`
//           .summonerBasicStats {
//             display: flex;
//             justify-content: flex-end;
//             width: 615px;
//             margin: 0 auto;
//             flex-wrap: wrap;
//           }
//           li {
//             padding-left: 25px;
//             padding-right: 25px;
//             font-family: 'Roboto', sans-serif;
//             font-weight: normal;
//             letter-spacing: 1px;
//           }
//           h3 {
//             font-weight: normal;
//           }
//           p {
//             opacity: 0.4;
//             margin-bottom: 5px;
//           }
//           .summonerName {
//             padding-right: 35px;
//           }
//         `}</style>
//       </div>
//     )
//   }
// }

export class About extends React.Component {
  render() {
    return (
      <div className="contentd">
        <ul>
          <li>
            <h3 className="summonerName">Summoner</h3>
          </li>
          <li>
            <p>Rank</p>
            <h3>Silver IV</h3>
          </li>
          <li>
            <p>Champ</p>
            <h3>Ashe</h3>
          </li>
          <li>
            <p>Wins</p>
            <h3>87</h3>
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
