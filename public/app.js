const contractAbi = [];
const contractAddress = '0xF19Aef1e7D3425B81d3Bf7D7b6720C6795DFF165';
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

const simpleContract = new web3.eth.Contract(contractAbi, contractAddress);

console.log(simpleContract);

web3.eth.getAccounts().then((data) => console.log(data));
