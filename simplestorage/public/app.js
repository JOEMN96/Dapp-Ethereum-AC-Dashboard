const ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "data",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_data",
        "type": "string"
      }
    ],
    "name": "setData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getData",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const web3 = new Web3(Web3.currntProvider || 'ws://localhost:9545');

const addresss = '0x5Dcf03332894afdEF62CeC027F592Da46AafC8eb';

let strorageContract = new web3.eth.Contract(ABI, addresss);

web3.eth.getAccounts().then((ac) => console.log(ac));

const getData = async () => {
  let val = await strorageContract.methods.getData().call();
  return val;
};

document.addEventListener('DOMContentLoaded', async () => {
  let data = await getData();
  console.log(data);
});
