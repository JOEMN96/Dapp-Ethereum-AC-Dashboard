const ABI = [
  {
    constant: true,
    inputs: [],
    name: 'data',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'string',
        name: '_data',
        type: 'string',
      },
    ],
    name: 'setData',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getData',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

const web3 = new Web3(Web3.currntProvider || 'ws://localhost:9545');

const addresss = '0xF19Aef1e7D3425B81d3Bf7D7b6720C6795DFF165';

let strorageContract = new web3.eth.Contract(ABI, addresss);
let accounts = [];
web3.eth.getAccounts().then((ac) => (accounts = ac));

const getData = async () => {
  let val = await strorageContract.methods.data().call();
  return val;
};

document.addEventListener('DOMContentLoaded', async () => {
  let data = await getData();
  console.log(data);
  let res = await strorageContract.methods.setData('hello contractX').send({
    from: accounts[0],
  });
  console.log(res);
  let dat2 = await getData();
  console.log(dat2);
});
