import BNB from "../assets/images/currency/BNB.png";
import DAI from "../assets/images/currency/DAI.png";
import ETH from "../assets/images/currency/ETH.png";
import WETH from "../assets/images/currency/WETH.png";
import USDT from "../assets/images/currency/USDT.png";
import USTC from "../assets/images/currency/USTC.png";
import BTC from "../assets/images/currency/BTC.png";
import XMR from "../assets/images/currency/XMR.png";
import INCH from "../assets/images/currency/1INCH.png";


import { currencyTypeInterface, howCurrencyTypeInterface } from "../components/interface";

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
