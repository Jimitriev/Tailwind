import { FC } from "react";
import Complete from "../components/sections/how/complete";
import Createorder from "../components/sections/how/createorder";
import Deposit from "../components/sections/how/deposit";
import Featuredon from "../components/sections/how/featuredon";
import Questions from "../components/sections/how/questions";
import Title from "../components/sections/how/title";
import Transations from "../components/sections/how/transactions";
import Watingconv from "../components/sections/how/watingconv";

const HOW: FC = () => {
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

export default HOW;