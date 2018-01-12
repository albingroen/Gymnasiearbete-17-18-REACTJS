import React from 'react'
import Link from 'next/link'
import { Button } from '../comps/button.js'
import { Nav } from '../comps/nav.js'
import { Input } from '../comps/input.js'
import { MyHead } from '../comps/head.js'
import Head from 'next/head'

class Index extends React.Component {
  render() {
    return (
      <div>
        <MyHead />
        <Head>
          <title>Start</title>
        </Head>
        <Nav />
        {/* <div className="header">
          <div className="icons">
            <img src="/static/Images/sword-icon-01.png" alt="" />
            <img src="/static/Images/path-icon-01.png" alt="" />
            <img src="/static/Images/tower-icon-01.png" alt="" />
          </div>
          <div className="headerContent">
            <h1 className="title">Search for summoner...</h1>
            <Input />
          </div>
          <p className="dataInfo">
            We get all of our stats from Riotgames™ API.
          </p>
        </div> */}
        <MainHead />
        <SubNav />
        <Card />
        <style jsx global>{`
          body {
            background: #f4f4f4;
            padding: 0;
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Index

// Header

const MainHeadStyle = {
  width: '100%',
  height: '550px',
  backgroundImage: 'url(../static/Images/bg.png)',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const Title = {
  color: 'white',
  fontFamily: 'Lato',
  fontWeight: '300',
  fontSize: '40px',
  letterSpacing: '.5px',
  margin: 0,
  padding: 0,
  textAlign: 'center',
}

const Paragraph = {
  color: 'white',
  fontFamily: 'Lato',
  fontWeight: '300',
  maxWidth: '600px',
  lineHeight: '25px',
  textAlign: 'center',
  opacity: '.6',
}

class MainHead extends React.Component {
  render() {
    return (
      <div style={MainHeadStyle} className="head">
        <h1 style={Title}>Search summoner and recieve critical stats.</h1>
        <p style={Paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo
          doloribus, voluptas aspernatur quasi minus error, exercitationem
        </p>
        <Input />
      </div>
    )
  }
}

// SubNav

const wrapper = {
  width: '100%',
  height: '70px',
  background: 'white',
}

const SubNavStyle = {
  maxWidth: '1350px',
  margin: '0 auto',
  height: '100%',
  background: 'white',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

const hover = {
  borderBottom: '2.5px solid cornflowerblue',
}

const partAnckor = {
  textTransform: 'uppercase',
  letterSpacing: '.5px',
  fontSize: '14px',
  fontWeight: 'normal',
  textDecoration: 'none',
  color: '#333',
}

class SubNav extends React.Component {
  render() {
    return (
      <div style={wrapper}>
        <div style={SubNavStyle}>
          <div className="part">
            <a style={partAnckor} href="">
              Season 1
            </a>
          </div>
          <div className="part">
            <a style={partAnckor} href="">
              Season 2
            </a>
          </div>
          <div className="part">
            <a style={partAnckor} href="">
              Season 3
            </a>
          </div>
          <div className="part">
            <a style={partAnckor} href="">
              Season 4
            </a>
          </div>
        </div>
        <style jsx>{`
          .part {
            height: 100%;
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            font-family: Roboto;
            border-right: 0.5px solid #f4f4f4;
            border-left: 0.5px solid #f4f4f4;
            cursor: pointer;
          }
          .part:hover {
            border-bottom: 2.5px solid cornflowerblue;
          }
        `}</style>
      </div>
    )
  }
}

// Card

const CardStyle = {
  maxWidth: '1350px',
  margin: '50px',
  height: '650px',
  background: 'white',
  borderRadius: '5px',
  margin: '0 auto',
  marginTop: '50px',
  marginBottom: '50px',
}

class Card extends React.Component {
  render() {
    return <div style={CardStyle} />
  }
}
