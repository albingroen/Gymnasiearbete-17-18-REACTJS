import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Button } from './button'

// Alla regions så att vi har dom i en array redan
const regions = [
  'Eu West',
  'Eu Nordic and East',
  'Russia',
  'Turkey',
  'Japan',
  'Korea',
  'USA',
  'UK',
  'China',
  'India',
]
const toSlug = region =>
  region
    .toLowerCase()
    .replace(
      /\s/g,
      '-',
    ) /* Replaces all the spaces in the regions with "-" so that they are HTML friendly (Will be used in URL) */
const getValue = (event, name) => event.target[name].value

export class Input extends React.Component {
  onSubmit = event => {
    event.preventDefault()

    const userName = getValue(event, 'userName')
    const region = getValue(event, 'region')

    Router.push(
      { pathname: '/dashboard', query: { userName, region } },
      `/dashboard/${region}/${userName}`,
    )
  }

  render() {
    return (
      /* Searching input, here they put the summoner-name*/
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" name="userName" placeholder="Search summoner..." />
          <br />

          {/*Tuff läxa, man behöver göra kommentarer såhär inuti React komponenter.*/}
          {/*Region choosing*/}
          {/* <select className="choose-region" name="region">
            {regions.map(region => (
              <option value={toSlug(region)} key={region}>
                {' '}
                {region}
              </option>
            ))}
          </select> */}
          <Button />
        </form>
        <style jsx>{`
          form {
            width: 400px;
            display: flex;
            flex-direction: row;
          }
          input {
            height: 45px;
            font-size: 15px;
            width: 379px;
            font-weight: 300;
            letter-spacing: 0.5px;
            padding-left: 20px;
            color: white;
            font-family: 'Open sans', sans-serif;
            margin-top: 30px;
            border-radius: 2px 0px 0px 2px;
            border: none;
            border: 1px solid rgba(0, 0, 0, 0.2);
            transition: 0.2s ease-out 0.2s;
            margin-bottom: 20px;
            background: rgba(255, 255, 255, 0.1);
          }
          input:focus {
            outline: none;
          }
          input::placeholder {
            color: rgba(255, 2555, 255, 0.4);
          }
          input:focus::placeholder {
            color: rgba(0, 0, 0, 0.2);
            transition: 0.2s ease-out 0.2s;
          }
        `}</style>
      </div>
    )
  }
}
