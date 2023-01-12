import React, { FC } from "react";
import Analyze from "../components/sections/mix/analyze";
import BestPlatform from "../components/sections/mix/bestplatform";
import Cryptocurrencies from "../components/sections/mix/cryptocurrencies";
import Private from "../components/sections/mix/private";
import Transaction from "../components/sections/mix/transaction";
import Trending from "../components/sections/mix/trending";

const Mix: FC = () => {
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

export default Mix;