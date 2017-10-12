import React from 'react'
import Link from 'next/link'

export class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a href="">Home</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a href="">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a href="">Search</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a href="">Guides</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="right" href="">
                    Games
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="right-right" href="">
                    Players
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="">
                  <a className="right-right" href="">
                    Players
                  </a>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>

        <style jsx global>{`
          .content {
            width: 80%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
          }
          nav {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 40px;
          }
          ul {
            display: inline-block;
          }
          li {
            display: inline-block;
            padding: 20px;
          }
          a {
            color: #222;
            font-family: 'Roboto', sans-serif;
            text-decoration: none;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
          }
          .right {
            color: #222 !important;
            opacity: 0.5;
            padding-left: 100px;
          }
          .right:hover {
            opacity: 0.75;
          }
          .right-right {
            color: #222 !important;
            opacity: 0.5;
          }
          .right-right:hover {
            opacity: 0.75;
          }
          a:hover {
            color: #08cc8b;
          }
          @media screen and (max-width: 800px) {
            nav {
              display: none;
            }
          }
        `}</style>
      </div>
    )
  }
}
