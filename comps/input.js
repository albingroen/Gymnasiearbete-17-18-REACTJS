import React from 'react'
import Link from 'next/link'
import { Button } from './button'

export class Input extends React.Component {
  render() {
    return (
      <div>
        <form className="summoner-search">
          <input
            type="text"
            className="summoner-search-input"
            placeholder="Search summoner"
          />
          <br />
          <select name="" id="">
            <option value="">EU west</option>
            <option value="">EU nordic and east</option>
            <option value="">Korea</option>
            <option value="">Russia</option>
            <option value="">Turkey</option>
            <option value="">North America</option>
          </select>
          <Link href="#">
            <Button />
          </Link>
        </form>
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
