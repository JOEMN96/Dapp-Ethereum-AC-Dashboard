import Web3 from 'web3';

const ABI = [
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'ids',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'add',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'get',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getAll',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];
const address = '0x5Dcf03332894afdEF62CeC027F592Da46AafC8eb';

const web3 = new Web3('ws://localhost:9545');
let accounts = [];
web3.eth.getAccounts().then((acc) => (accounts = acc));

let contract = new web3.eth.Contract(ABI, address);
console.log(contract);

let length = document.querySelector('.getlength');
let dis = document.querySelector('h2');
let getArr = document.querySelector('.getArr');

length.addEventListener('click', async () => {
  let res = await contract.methods.getLength().call();
  dis.innerHTML = res;
});

getArr.addEventListener('click', async () => {
  let res = await contract.methods.getAll().call();

  console.log(res);
});
