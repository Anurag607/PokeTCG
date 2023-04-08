import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";

const ConnectWalletBtn = () => {
    return (
        <div className="connect">
            <ConnectWallet 
                dropdownPosition={{
                    align: 'center',
                    side: 'bottom',
                }} 
                theme={"dark"}
                className={"connectWalletBtn"}
            />
        </div>
    )
}

export default ConnectWalletBtn