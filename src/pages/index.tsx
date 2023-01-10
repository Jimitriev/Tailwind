import { FC } from "react";

import FrontSection from "../components/sections/home/front";
import MixSection from "../components/sections/home/Mix";
import MixStepSection from "../components/sections/home/mixSteps";
import CryptoSection from "../components/sections/home/Crpto";
import QualitySection from "../components/sections/home/Quanlity";
import PairSection from "../components/sections/home/pair";
import HowSection from "../components/sections/home/how";
import PrivacySection from "../components/sections/home/privacy";

const Home: FC = function () {
    return (
        <div className="w-full flex flex-col items-center">
            <FrontSection />
            <MixStepSection />
            <MixSection />
            <CryptoSection />
            <QualitySection />
            <PairSection />
            <HowSection />
            <PrivacySection />
        </div>
    )
}

export default Home;