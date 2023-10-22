const { default: axios } = require("axios");
const qs = require("qs");
const params = {
  buyToken: "DAI",
  sellToken: "ETH",
  sellAmount: 0.05 * Math.pow(10, 18).toString(), // Always denominated in wei
};
const URL = "https://api.0x.org/swap/v1/quote?";

//Get Default Quote
const getDefaultQuote = async () => {
  let response;
  try {
    response = await axios.get(`${URL}${qs.stringify(params)}`);
  } catch (err) {
    console.error(err);
  }
  console.log("Default Quote");
  console.log("%O", response.data);
  console.log("%O", response.data.sources);
};

//Get Quote from a specific DEX
const getUniSwapV3Quote = async (inputToken, outputToken, value) => {
  const exchangeList = "Uniswap_V3";
  const params = {
    buyToken: "DAI",
    sellToken: "ETH",
    sellAmount: 0.05 * Math.pow(10, 18).toString(), // Always denominated in wei
    includedSources: exchangeList,
  };
  let response;
  try {
    response = await axios.get(`${URL}${qs.stringify(params)}`);
  } catch (err) {
    console.error(err);
  }
  console.log("Uniswap Quote");
  console.log("%O", response.data);
  console.log("%O", response.data.sources);
};

getDefaultQuote();
getUniSwapV3Quote();
