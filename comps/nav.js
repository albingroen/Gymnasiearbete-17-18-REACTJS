import React from 'react'
import Link from 'next/link'

export class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Guides</a>
            </li>
          </ul>
        </nav>
        <style jsx global>{`
          nav {
            height: 60px;
            background: #222;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          ul {
            display: inline-block;
          }
          li {
            display: inline-block;
          }
          a {
            color: white;
            font-family: 'Roboto', sans-serif;
            margin-right: 20px;
            margin-left: 20px;
            text-decoration: none;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 2px;
            opacity: 0.75;
          }
          a:hover {
            opacity: 1;
          }
        `}</style>
      </div>
    )
  }
}
