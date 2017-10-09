import React from 'react'
import Link from 'next/link'
import { Button } from '../comps/button.js'
import { Nav } from '../comps/nav.js'
import { Input } from '../comps/input.js'

const Index = () => (
  <div>
    <Nav />
    <div className="header">
      <div className="headerContent">
        <h1 className="title">Search for summoner</h1>
        <Input />
        <Button />
      </div>
    </div>
  </div>
)

export default Index
