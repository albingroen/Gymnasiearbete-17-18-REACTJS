import React from 'react'
import Link from 'next/link'

const Items = {
  item1: 'Lolstats',
  item2: 'Home',
  item3: 'Search',
  item4: 'About',
  item5: 'Contact',
}

const ListItemStyle = {
  display: 'inlineBlock',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  color: 'white',
  textTransform: 'uppercase',
}

const AnckorStyle = {
  color: 'white',
  fontFamily: 'Open sans',
  fontWeight: 'lighter',
  textDecoration: 'none',
  fontSize: '12px',
  paddingTop: '15px',
  paddingBottom: '15px',
  paddingRight: '90px',
  letterSpacing: '1px',
  fontWeight: 'normal',
}

const NavStyle = {
  margin: '0 auto',
  height: '80px',
  background: '#222',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const ListStyle = {
  display: 'inline-flex',
  flexWrap: 'wrap',
}

export class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav style={NavStyle}>
          <ul style={ListStyle}>
            <NavItem item={Items.item1} path="/" />
            <NavItem item={Items.item2} path="/" />
            <NavItem item={Items.item3} path="/" />
            <NavItem item={Items.item4} path="/" />
            <NavItem item={Items.item5} path="/" />
          </ul>
        </nav>
      </div>
    )
  }
}

class NavItem extends React.Component {
  render() {
    return (
      <div>
        <li style={ListItemStyle}>
          <Link href={this.props.path}>
            <a style={AnckorStyle} href="">
              {this.props.item}
            </a>
          </Link>
        </li>
      </div>
    )
  }
}
