import Link from 'next/link'
import React from 'react'

export class Button extends React.Component {
  render() {
    return (
      <div>
        <Link href="/about">
          <button className="knapp">Read more</button>
        </Link>
        <style jsx>{`
          button {
            background: #75aaff;
            border: none;
            color: white;
            font-family: 'Roboto', sans-serif;
            padding: 15px 40px 15px 30px;
            font-size: 15px;
            font-weight: lighter;
            letter-spacing: 0.6px;
            cursor: pointer;
            transition: 0.1s ease-out 0s;
            border-radius: 3px;
          }
          button:hover {
            background: #639fff;
            transition: 0.1s ease-out 0s;
          }
        `}</style>
      </div>
    )
  }
}
