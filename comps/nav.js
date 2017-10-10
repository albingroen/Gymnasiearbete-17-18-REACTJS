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
            <li>
              <a className="right" href="">
                Games
              </a>
            </li>
            <li>
              <a className="right-right" href="">
                Players
              </a>
            </li>
          </ul>
        </nav>
        <style jsx global>{`
          nav {
            height: 60px;
            background: white;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 25px;
            z-index: 2;
          }
          ul {
            display: inline-block;
          }
          li {
            display: inline-block;
          }
          a {
            color: #75aaff;
            font-family: 'Roboto', sans-serif;
            margin-right: 15px;
            margin-left: 15px;
            text-decoration: none;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
          }
          .right {
            margin-left: 130px;
            color: #222 !important;
            opacity: 0.5;
          }
          .right-right {
            color: #222 !important;
            opacity: 0.5;
          }
          a:hover {
            color: #497dd1;
          }
        `}</style>
      </div>
    )
  }
}
