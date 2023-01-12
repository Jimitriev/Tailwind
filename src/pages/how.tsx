import React, { FC } from "react";
import Analyze from "../components/sections/how/analyze";
import BestPlatform from "../components/sections/how/bestplatform";
import Cryptocurrencies from "../components/sections/how/cryptocurrencies";
import Private from "../components/sections/how/private";
import Transaction from "../components/sections/how/transaction";
import Trending from "../components/sections/how/trending";

const How: FC = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Cryptocurrencies />
            <Private />
            <Analyze />
            <BestPlatform />
            <Trending />
            <Transaction />
        </div>
    )
}

export default How;