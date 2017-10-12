import React from 'react'
import Link from 'next/link'
import { Nav } from '../comps/nav.js'
import { About } from '../comps/aboutsummoner.js'

// class Dashboard extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="header">
//           <div className="headerContent">
//             <Nav />
//             <About />
//             <div className="line" />
//             <h1 className="title">Latest games</h1>
//             <style jsx global>{`
//           * {
//             padding: 0;
//             margin: 0;
//           }
//           .line {
//             height: .5px;
//             background: rgba(0,0,0, .1);
//             width: 100vw;
//             margin-top: 15px;
//           }
//           body {
//             background: white;
//           }
//           .header {
//             height: 20vh;
//             width: 1000px;
//             margin: 0 auto;
//             display: flex;
//             justify-content: center;

//           }
//           .title,
//           .about-site {
//             color: #222;
//             font-family: 'Roboto', sans-serif;
//             font-weight: 400;
//             font-size: 40px;
//             margin-bottom: 20px;
//           }
//           .title {
//             font-weight: 300!important;
//             letter-spacing: .5px;
//             text-align: center;
//             margin-top: 100px;
//           }
//           .about-site {
//             font-family: 'Lato', sanss-serif;
//             font-weight: 400;
//             font-size: 17px;
//             width: 400px
//             margin-bottom: 70px;
//             opacity: .5;
//           }
//         `}</style>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Dashboard

export default class eashboard extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <About />
        <div className="contenth">
          <div className="header">
            <div className="headerContent">
              <h1 className="title">Latest games</h1>
              <p className="about-site">
                This is a summary of the latest games<br />played by this
                specific summoner.
              </p>
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
            `}</style>
          </div>
        </div>
      </div>
    )
  }
}
