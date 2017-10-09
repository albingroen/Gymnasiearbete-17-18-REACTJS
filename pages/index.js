import React from 'react'
import Link from 'next/link'
import { Button } from '../comps/button.js'
import { Nav } from '../comps/nav.js'
import { Input } from '../comps/input.js'

const Index = () => (
  <div>
    <Nav />
    <div className="header">
      <div className="headerContent">
        <h1 className="title">Search for summoner</h1>
        <p className="about-site">
          Enter a summoner name to recieve to most necessary information about
          the player.
        </p>
        <Input />
        <style jsx global>{`
          * {
            padding: 0;
            margin: 0;
          }
          .header {
            height: 600px;
            widht: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url('/static/Images/bg-new.png');
            background-size: cover;
            background-position: center;

          }
          .headerContent {
            text-align: center;
          }
          .title,
          .about-site {
            color: white;
            font-family: 'Lato', sanss-serif;
            font-weight: 300;
            font-size: 40px;
            letter-spacing: 1px;
            margin-bottom: 20px;
          }
          .about-site {
            olor: white;
            font-family: 'Lato', sanss-serif;
            font-weight: 300;
            font-size: 15px;
            width: 400px
            letter-spacing: 1px;
            margin-bottom: 70px;
            opacity: .4;
          }
        `}</style>
      </div>
    </div>
  </div>
)

export default Index
