import React from 'react'
import '../styles/Marketplace.css'

const Card = ({hp,imgSrc,pokeName,statAttack,statDefense,statSpeed, price}) => {

  return (
 
      <div className="card" >
        <div className="flex justify-evenly">
          <p className="hp">
                {price}
              <span> MATIC</span>
            </p>
          <p className="hp">
              <span>HP </span>
                {hp}
            </p>
        </div>
          <img src={imgSrc} />
          <h1 className="poke-name">{pokeName}</h1>
          <div className="stats">
            <div>
              <h3>{statAttack}</h3>
              <p>Attack</p>
            </div>
            <div>
              <h3>{statDefense}</h3>
              <p>Defense</p>
            </div>
            <div>
              <h3>{statSpeed}</h3>
              <p>Speed</p>
            </div>
          </div>
      </div>
  )
}

export default Card