import React from 'react'
import Link from 'next/link'
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
const toSlug = region => region.toLowerCase().replace(/\s/g, '-') /* Replaces all the spaces in the regions with "-" so that they are HTML friendly (Will be used in URL) */
const getValue = (event, name) => event.target[name].value


export class Input extends React.Component {
  render() {
    return (
    {/* Searching input, here they put the summoner-name*/}
      <div>
        <form className="summoner-search">
          <input
            type="text"
            className="summoner-search-input"
            placeholder="Search summoner"
            onSubmit={function(e) {window.location.hash = e.target.value; }}
          />
          <br />

          {/*Region choosing*/}
          <select name="region">
            {regions.map(region => (
              <option value={toSlug(region)} key={region}> {/*Views all values, the toSlug(region) replaces all spaces in the region names.*/}
                {region}
              </option>
            ))}
          </select>
          <Link href="#">
            <Button />
          </Link>
        </form>

        {/*Styling*/}
        <style jsx global>{`
          input {
            font-size: 18px;
            border-bottom: 0.5px dashed rgba(0, 0, 0, 0.4) !important;
            background: none;
            width: 250px;
            padding-right: 20px;
            padding-left: 20px;
            font-weight: 300;
            padding-bottom: 5px;
            letter-spacing: 1px;
            border: none;
            margin-bottom: 30px;
            color: #222;
            font-family: 'Roboto', sans-serif;
            transition: 0.2s ease-out 0.05s;
            text-align: center;
          }
          input:focus {
            outline: none;
            border-bottom: 0.5px dashed rgba(0, 0, 0, 0.99) !important;
            transition: 0.2s ease-out 0.05;
          }
          input::placeholder {
            transition: 0.1s ease-out 0.1s;
            opacity: 0.5;
          }
          input:focus::placeholder {
            opacity: 0.1;
            transition: 0.1s ease-out 0.1s;
          }
        `}</style>
      </div>
    )
  }
}
