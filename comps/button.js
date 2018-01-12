import Link from 'next/link'
import React from 'react'

export class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="button">GO</button>

        <style jsx global>{`
          button {
            font-weight: lighter;
          }
        `}</style>
        <style jsx>{`
          .button {
            width: 100%;
            color: white;
            background: #5f59ff;
            border-radius: 0px 2px 2px 0px;
            font-faily: 'Open sans', sans-serif;
            text-align: center;
            font-size: 16px;
            letter-spacing: 0.5px;
            padding: 14.5px;
            border: none;
            cursor: pointer;
            transition: 0.1s ease-out 0.1s;
            margin-top: 31px;
          }
          .button:hover {
            background: #6b66f0;
            transition: 0.1s ease-out 0.1s;
          }
          .button:focus {
            outline: none;
          }
        `}</style>
      </div>
    )
  }
}
