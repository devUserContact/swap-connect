var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import curve from '@curvefi/api';
//import Web3 from 'web3'
import * as dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.QUICKNODE_KEY;
const apiUrl = process.env.QUICKNODE_URL;
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield curve.init('JsonRpc', { url: apiUrl, privateKey: '' });
    yield curve.factory.fetchPools();
    //  await curve.cryptoFactory.fetchPools()
    //  let poolList = curve.getPoolList()
    const aave = curve.getPool('aave');
    let aaveStats = yield aave.stats.parameters();
    console.log(aaveStats);
}))();
