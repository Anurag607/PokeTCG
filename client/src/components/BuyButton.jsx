import React from 'react'
import { useBuyNow, useContract, Web3Button, useOwnedNFTs, useAddress } from "@thirdweb-dev/react";
import { ListingType } from "@thirdweb-dev/sdk";
import { BigNumber } from 'ethers';
import { getUserNFTs, registerUserNFTs } from '../../firebase/clientApp.mjs';

const contractAddress = "0x2ED184a348935C941F821B2ac142db9C9c33EBe0";
export default function BuyButton(props) {
  const { contract } = useContract(contractAddress, "marketplace");
  const { mutateAsync: buyNow, isLoading, error } = useBuyNow(contract);
  let id=(props.id).toString();
  const [nfts, setNfts] = React.useState([]);
  

  const userAddress = useAddress();
    

  return (
    <div>

    <Web3Button
      contractAddress={contractAddress}
      action={() => {
        buyNow({
          id: `${id}`, // ID of the listing to buy
          type: ListingType.Direct, // Direct (0) or Auction (1)
          buyAmount: "1" // Amount to buy
        });}
      }
      
      onSuccess={() => {
        getUserNFTs(userAddress).then((data) => {
            const tempData = data.nfts;
            tempData.push(id);
            setNfts(tempData);
            registerUserNFTs(userAddress, tempData);
        });
      }}
        onError={() => {
            getUserNFTs(userAddress).then((data) => {
                const tempData = nfts;
                tempData.pop();
                setNfts(tempData);
                registerUserNFTs(userAddress, nfts);
            });
        }}
    >

      Buy Now
    </Web3Button>
    </div>
  )
}
