import React, { useState } from 'react'
import { useContract, useListings } from "@thirdweb-dev/react";
import Card from './Card'
import Navbar from './Navbar';
import BuyButton from './BuyButton';
import '../styles/Marketplace.css'

const MarketPlace = () => {
  const { contract } = useContract("0x2ED184a348935C941F821B2ac142db9C9c33EBe0","marketplace");
  const {data , isLoading, error} = useListings(contract);
  console.log(data);

  return (
    <div>
      <Navbar/>
      <div className="card-container">

        {!data ? <div>Loading...</div> : data.map((pokemon) => {
            return (
              <div className="flex flex-col justify-center items-center gap-1 mb-10">
                <Card pokeName={pokemon.asset.name} imgSrc={pokemon.asset.image} hp={pokemon.asset.attributes[0].value} statAttack={pokemon.asset.attributes[1].value} statDefense={pokemon.asset.attributes[2].value} statSpeed={pokemon.asset.attributes[3].value} price={pokemon.buyoutCurrencyValuePerToken.displayValue}/>
                <BuyButton id={pokemon.asset.id} amt="1" />
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default MarketPlace