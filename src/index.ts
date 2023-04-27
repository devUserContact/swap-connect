import curve from '@curvefi/api'
import Web3 from 'web3'
import * as dotenv from 'dotenv'

dotenv.config()
const apiKey = process.env.QUICKNODE_KEY;
const apiUrl = process.env.QUICKNODE_URL;

(async () => {
  await curve.init('JsonRpc', { url: apiUrl, privateKey: ''})
  await curve.factory.fetchPools()
//  await curve.cryptoFactory.fetchPools()
//  let poolList = curve.getPoolList()

  const aave = curve.getPool('aave')
  
  let aaveStats = await aave.stats.parameters();
  console.log(aaveStats);
})()
