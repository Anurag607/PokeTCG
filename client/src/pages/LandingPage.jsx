import React from "react";
import Navbar from "../components/Navbar2";
import Fade from "react-reveal/Fade";
import cardImg from "../../assets/cards.png"

const LandingPage = () => {
    return (
        <div className="from-[#0f0c30] to-[#0b0b34] bg-gradient-to-b w-full  px-10 lg:px-28 lg:h-screen overflow-hidden">
            <Navbar />
            <div className="lg:flex lg:items-center lg:pt-8">
                <Fade left cascade>
                    <div className="lg:w-[800px] container  xl:pt-24 lg:pt-10 pt-20">
                        <h1 className="font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-white xl:leading-[5rem] md:leading-[4rem]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#a0b849] to-[#54c3d7]">
                                Trade, Collect, Conquer: {" "}
                            </span>
                            Unleash the Power of NFTs!
                        </h1>
                        <div className="xl:flex-column justify-center mt-7">
                        <p className="w-[80%] text-[18px] text-gray-400 font-bold font-sans tracking-wider lg:leading-6 xl:pt-0 pt-4 pb-8">
                            Build your ultimate deck, battle opponents in thrilling duels, and navigate the dynamic NFT marketplace to strengthen your collection. With stunning graphics and immersive gameplay, become a legend in the world of NFT card trading!
                        </p>
                            <div>
                                <button className="rounded px-7 py-3 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider font-bold">
                                    <span className="absolute inset-0 bg-gradient-to-br from-[#a0b849] to-[#54c3d7] font-bold"></span>
                                    <span className="absolute inset-0 flex justify-center items-center">
                                        Connect Your Wallet
                                    </span>
                                    Connect Your Wallet
                                </button>
                            </div>
                        </div>
                    </div>
                </Fade>

                <div className="pr-24 mt-10 lg:pr-0 lg:mt-0 flex">
                    <Fade right cascade>
                        <div className="inline-block">
                            <img
                                src={cardImg}
                                alt="Pokemon Cards"
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
