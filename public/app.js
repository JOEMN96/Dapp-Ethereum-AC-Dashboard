const contractAbi = [];
const contractAddress = '0xE3dA89Fc1dC69c6D156ebCc66a639365e96d4a8e';
const web3 = new Web3(Web3.currentProvider || 'http://localhost:9545');

const simpleContract = new web3.eth.Contract(contractAbi, contractAddress);

console.log(simpleContract);

web3.eth.getAccounts().then((data) => console.log(data));
