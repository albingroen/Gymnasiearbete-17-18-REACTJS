import React from 'react'
import Link from 'next/link'
import { Button } from './button'

export class Card1 extends React.Component {
  render() {
    return (
      <div>
        <div className="card1">
          <div className="overlay" />

          <div className="cardContent">
            <h3>Esport filling out entire arenas.</h3>
            <Button />
            <style jsx global>{`
              .card1 {
                height: 350px;
                width: 300px;
                margin: 20px;
                color: white
                background-image: url('/static/Images/stadium-min.jpg');
                image-resolution: 72dpi;
                background-size: cover;
                background-position: center;
                cursor: pointer;
              }
              .card1:hover .overlay {
                background: rgba(0,0,0, .5)
              }
              .cardContent {
                padding: 20px;
                padding-top: 200px;
                z-index: 2;
                position: relative;
              }
              h3 {
                font-family: 'Lato', sans-serif;
                font-size: 25px;
                font-weight: 300;
                letter-spacing: 1px;
                margin-bottom: 20px;
              }
              .overlay {
                height: 350px;
                z-index: 0;
                width: 300px;
                background: rgba(0,0,0, .5);                
                position: absolute;
                transition: .2s ease-out 0s;
              }
              
            `}</style>
          </div>
        </div>
      </div>
    )
  }
}

export class Card2 extends React.Component {
  render() {
    return (
      <div>
        <div className="card2 card1">
          <div className="overlay" />

          <div className="cardContent">
            <h3>Is VR coming to League of Legends?</h3>
            <Button />
            <style jsx global>{`
              .card2 {
                background-image: url('/static/Images/lol-vr-min.jpg') !important;
              }
            `}</style>
          </div>
        </div>
      </div>
    )
  }
}

export class Card3 extends React.Component {
  render() {
    return (
      <div>
        <div className="card3 card1">
          <div className="overlay" />

          <div className="cardContent">
            <h3>What's actually a real sport?</h3>
            <Button />
            <style jsx global>{`
              .card3 {
                background-image: url('/static/Images/benches-min.jpg') !important;
              }
            `}</style>
          </div>
        </div>
      </div>
    )
  }
}
