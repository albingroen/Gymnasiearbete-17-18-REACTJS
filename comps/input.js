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

        {/*Styling!*/}

        <style jsx global>{`
          form {
            display: flex;
            flex-direction: row;
            height: 60px;
            width: 65%;
          }

          input {
            font-size: 18px;
            border-right: 1px solid rgba(0, 0, 0, 0.4) !important;
            background: white;
            width: 300px;
            border-radius: 3px 0px 0px 3px;
            padding: 20px;
            font-weight: 400;
            border: none;
            color: #222;
            font-family: 'Roboto', sans-serif;
            transition: 0.2s ease-out 0.05s;
          }
          input:focus {
            outline: none;
          }
          input::placeholder {
            transition: 0.1s ease-out 0.1s;
            opacity: 0.5;
          }
          input:focus::placeholder {
            opacity: 0.1;
            transition: 0.1s ease-out 0.1s;
          }
          .choose-region {
            appearance: none;
            -moz-appearance: none;
            -webkite-appearance: none;
            border-radius: 0px;
            background: white;
            color: #333;
            border: none;
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            paddding-right: 0px !important;
            font-size: 18px;
            width: 250px;
            padding-left: 20px;
          }
          .choose-region:focus {
            outline: none;
          }
        `}</style>
      </div>
    )
  }
}
