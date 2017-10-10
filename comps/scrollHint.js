import React from 'react'

export class Scrollhint extends React.Component {
  render() {
    return (
      <div className="mouse">
        <div className="scroll" />
        <style jsx global>{`
          .mouse {
            height: 15px;
            width: 10px;
            border: 1px solid #444;
            padding-top: 5px;
            padding-bottom: 5px;
            background: none;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            margin-top: 150px;
          }
          .scroll {
            height: 3px;
            border-radius: 50px;
            border: 1px solid #444;
            background: #444;
            animation: scroll 1.5s ease infinite forwards;

          }

          @keyframes scroll {
            0% {
              margin-top: 0px
              opacity: 1;
            }
            100% {
              margin-top: 10px;
              opacity: 0;
            }
          }
        `}</style>
      </div>
    )
  }
}
