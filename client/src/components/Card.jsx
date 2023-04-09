import React from 'react'
import '../styles/Marketplace.css'
import bg from '../../Public/card.jpg'

const Card = ({hp,imgSrc,pokeName,statAttack,statDefense,statSpeed, price, hidden}) => {

  return (
      <>
      <div className="card hover:scale-110 transition duration-300 ease-in-out cursor-pointer" style={{display: `${hidden ? 'none' : ''}`, backgroundImage: `${hidden ? '' : bg}` }}>
        <div className="flex justify-evenly w-full">
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
          <div className="stats flex justify-evenly w-full">
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
      </>

  )
}

export default Card