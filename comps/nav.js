import React from 'react'
import Link from 'next/link'

export class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Search</li>
            <li>Guides</li>
          </ul>
        </nav>
      </div>
    )
  }
}
