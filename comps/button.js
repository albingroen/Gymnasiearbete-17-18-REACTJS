import Link from 'next/link'
import React from 'react'

export class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="knapp">
          <img src="/static/Images/arrow-right.png" />
        </button>

        <style jsx>{`
          button {
            background: #0d58a6;
            border: none;
            color: white;
            font-family: 'Roboto', sans-serif;
            padding: 20px;
            font-size: 13px;
            font-weight: lighter;
            letter-spacing: 0.6px;
            cursor: pointer;
            transition: 0.1s ease-out 0s;
            border-radius: 0px 3px 3px 0px;
            height: 100%;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          button:focus {
            outline: none;
          }
          img {
            opacity: 0.5;
            transition: 0.2s ease-out 0.2s;
          }
          button:hover img {
            opacity: 1;
            transition: 0.2s ease-out 0.2s;
          }
        `}</style>
      </div>
    )
  }
}
