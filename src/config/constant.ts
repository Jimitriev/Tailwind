import BNB from "../assets/images/currency/BNB.png";
import DAI from "../assets/images/currency/DAI.png";
import ETH from "../assets/images/currency/ETH.png";
import WETH from "../assets/images/currency/WETH.png";
import USDT from "../assets/images/currency/USDT.png";
import USTC from "../assets/images/currency/USTC.png";
import BTC from "../assets/images/currency/BTC.png";
import XMR from "../assets/images/currency/XMR.png";
import INCH from "../assets/images/currency/1INCH.png";
import affordable from '../assets/images/platform/affordable.png';
import fast from '../assets/images/platform/fast.png';
import professionals from '../assets/images/platform/professionals.png';
import svgviewer from '../assets/images/platform/svgviewer.png';
import transparent from '../assets/images/platform/transparent.png';
import user from '../assets/images/platform/user.png';



import { currencyTypeInterface, howCurrencyTypeInterface, platformTypeInterface } from "../components/interface";

const currencyTypes:currencyTypeInterface[] = [{
    logo: BNB, 
    name: 'BNB (BEP - 20)', 
    symbol: 'BNB', 
    address: "",
}, {
    logo: ETH, 
    name: 'ETH', 
    symbol: 'ETH', 
    address: "",
}, {
    logo: DAI, 
    name: 'DAI', 
    symbol: 'DAI', 
    address: "",
}, {
    logo: USDT, 
    name: 'USDT', 
    symbol: 'USDT', 
    address: "",
}, {
    logo: USTC, 
    name: 'USTC', 
    symbol: 'USTC', 
    address: "",
}, {
    logo: WETH, 
    name: 'WETH', 
    symbol: 'WETH', 
    address: "",
}, ]

export {
    currencyTypes
}

const howCurrencyTypes:howCurrencyTypeInterface[] = [{
    logo: BTC, 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    address: "",
}, {
    logo: BTC, 
    name: 'Bitcoin', 
    symbol: 'ETH', 
    address: "",
}, {
    logo: BTC, 
    name: 'Bitcoin', 
    symbol: 'DAI', 
    address: "",
}, {
    logo: USDT, 
    name: 'USDT', 
    symbol: 'USDT', 
    address: "",
}, {
    logo: XMR, 
    name: 'TetherUS', 
    symbol: 'XMR', 
    address: "",
}, {
    logo: INCH, 
    name: '1INCH', 
    symbol: '1inch', 
    address: "",
}, ]

export {
    howCurrencyTypes
}

const platformTypes: platformTypeInterface[]=[
    {logo: svgviewer,
    name:'Complete anonymity',
    title:'Complete anonymity',
    description:'We maintain the highest standards of confidentiality as the main idea of cryptocurrency'
    },
    {logo: transparent,
    name:'Transparent',
    title:'Transparent',
    description:'We make sure the whole exchange process is straightforward, so users have the option to track a transaction’s status.'
    },
    {logo: affordable,
    name:'Affordable',
    title:'Affordable',
    description:'Take advantage of the crypto platform with the most attractive and favorable service charges.'
    },
    {logo: fast,
    name:'Fast',
    title:'Fast',
    description:'Our service maintains high transaction processing speed: it takes 5 to 30 minutes to process a transaction, depending on the volume of pending requests.'
    },
    {logo: user,
    name:'User-frendly',
    title:'User-friendly',
    description:'The service was created by a group of experts from the blockchain industry; they were eager to deliver the most convenient and user-friendly platform to buy cryptocurrency.'
    },
    {logo: professionals,
    name:'Professionals',
    title:'Professionals',
    description:'Our online support service is always here to assist you. Get answers to any questions 24/7.'
    },
]
export{platformTypes}