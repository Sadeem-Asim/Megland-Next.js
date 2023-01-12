import { combineReducers } from "redux";
import nfts from "./nfts";
import partners from "./partners";
import site from "./siteSettings";
import web3 from "./web3";
export default combineReducers({ partners, nfts, site, web3 });
