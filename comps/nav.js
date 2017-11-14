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
            </ul>
          </nav>
        </div>

        <style jsx>{`
          .content {
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            background: #1886e6;
            margin: 0;
          }
          nav {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-top: 40px;
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
            text-decoration: none;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 20px;
            letter-spacing: 1px;
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
