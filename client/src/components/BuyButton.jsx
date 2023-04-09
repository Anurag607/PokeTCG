import React from 'react'
import { useBuyNow, useContract, Web3Button, useOwnedNFTs } from "@thirdweb-dev/react";
import { ListingType } from "@thirdweb-dev/sdk";
import { BigNumber } from 'ethers';

const contractAddress = "0x2ED184a348935C941F821B2ac142db9C9c33EBe0";
export default function BuyButton(props) {
  const { contract } = useContract(contractAddress, "marketplace");
  const { mutateAsync: buyNow, isLoading, error } = useBuyNow(contract);
  let id=(props.id).toString();
  console.log(id);
  // let st = "";
  // id1 = BigNumber.from("1");
  // let amt=props.amt;
  // amt = BigNumber.from(amt);
  return (
    <Web3Button
      contractAddress={contractAddress}
      action={() =>
        buyNow({
          id: `${id}`, // ID of the listing to buy
          type: ListingType.Direct, // Direct (0) or Auction (1)
          buyAmount: "1" // Amount to buy
        })
      }
    >
      Buy Now
    </Web3Button>
  )
}
