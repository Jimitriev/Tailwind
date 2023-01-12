import { FC } from "react";
import Complete from "../components/sections/mix/complete";
import Createorder from "../components/sections/mix/createorder";
import Deposit from "../components/sections/mix/deposit";
import Featuredon from "../components/sections/mix/featuredon";
import Questions from "../components/sections/mix/questions";
import Title from "../components/sections/mix/title";
import Transations from "../components/sections/mix/transactions";
import Watingconv from "../components/sections/mix/watingconv";

const Mix: FC = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Title />
            <Createorder />
            <Deposit />
            <Watingconv />
            <Complete />
            <Questions />
            <Transations />
            <Featuredon />
        </div>
    )
}

export default Mix;