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
          <select class="choose-region" name="region">
            {regions.map(region => (
              <option value={toSlug(region)} key={region}>
                {' '}
                {/*Views all values, the toSlug(region) replaces all spaces in the region names.*/}
                {region}
              </option>
            ))}
          </select>
          <Button />
        </form>
        <style jsx>{`
          form {
            width: 400px;
          }
          input {
            height: 45px;
            font-size: 15px;
            width: 379px;
            padding-left: 20px;
            color: #222;
            font-family: 'Open sans', sans-serif;
            margin-top: 30px;
            border-radius: 2px;
            border: none;
            border: 1px solid rgba(0, 0, 0, 0.2);
            transition: 0.2s ease-out 0.2s;
            margin-bottom: 20px;
          }
          input:focus {
            outline: none;
          }
          input::placeholder {
            color: rgba(0, 0, 0, 0.4);
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
