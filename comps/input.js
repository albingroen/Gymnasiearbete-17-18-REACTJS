import React from 'react'

export class Input extends React.Component {
  render() {
    return (
      <form className="summoner-search">
        <h3>Search here</h3>
        <input
          type="text"
          className="summoner-search-input"
          placeholder="Search summoner"
        />
        <select name="" id="">
          <option value="">EU west</option>
          <option value="">EU nordic and east</option>
          <option value="">Korea</option>
          <option value="">Russia</option>
          <option value="">Turkey</option>
          <option value="">North America</option>
        </select>
      </form>
    )
  }
}
