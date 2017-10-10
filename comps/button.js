import Link from 'next/link'
import React from 'react'

export class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="knapp">Search</button>
        <style jsx>{`
          button {
            background: #0069ff;
            border: none;
            color: white;
            font-family: 'Roboto', sans-serif;
            padding: 17.5px 115px 17.5px 115px;
            font-size: 13px;
            font-weight: lighter;
            letter-spacing: 0.6px;
            cursor: pointer;
            transition: 0.1s ease-out 0s;
            border-radius: 3px;
            margin-top: 40px;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          button:hover {
            background: #639fff;
            transition: 0.1s ease-out 0s;
          }
          button:focus {
            outline: none;
          }
        `}</style>
      </div>
    )
  }
}
