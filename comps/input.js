import React from 'react'

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
        </form>
        <style jsx global>{`
          input {
            font-size: 18px;
            border-bottom: 0.5px solid rgba(255, 255, 255, 0.4) !important;
            background: none;
            width: 250px;
            padding-right: 100px;
            font-weight: 300;
            padding-bottom: 5px;
            letter-spacing: 1px;
            border: none;
            margin-bottom: 30px;
            color: white;
            font-family: 'Lato', sans-serif;
            transition: 0.2s ease-out 0.05s;
            letter-spacing: 1px;
          }
          input:focus {
            outline: none;
            border-bottom: 0.5px solid rgba(255, 255, 255, 0.8) !important;
            transition: 0.2s ease-out 0.05;
          }
        `}</style>
      </div>
    )
  }
}
