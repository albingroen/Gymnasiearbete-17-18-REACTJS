import React from 'react'
import Link from 'next/link'

export class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a href="">Lolstats.se</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a href="">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a href="">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a href="">Help</a>
              </Link>
            </li>
          </ul>
        </nav>

        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
          }
          nav {
            width: 100%;
            height: 65px;
            background: white;
            border-bottom: 1px solid rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          ul {
            width: 70%;
          }
          ul,
          li {
            display: inline-block;
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          a {
            color: #222;
            font-family: 'Open sans', sans-serif;
            font-weight: lighter;
            text-decoration: none;
            font-size: 15px;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-right: 25px;
            letter-spacing: 0.5px;
          }
        `}</style>
      </div>
    )
  }
}
