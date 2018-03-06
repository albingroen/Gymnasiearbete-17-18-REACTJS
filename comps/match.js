import React from 'react'
import {Link} from 'next/link'

export class Match extends React.Component {
  render() {
    return (<div>
      <div className="base" >
        <p>{this.props.lane}</p>
        <p>{this.props.champion}</p>
        <p>{this.props.id}</p>


        <style jsx>{`
          .base {
            width: 50%;
            margin: 0 auto;
            padding: 20px;
            height: 200px;
            background: white;
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            -webkit-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.05);
            -moz-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.05);
            box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.05);
          }

        `}
        </style>

      </div>
    </div>)
  }
}
