const ABI = [
  {
    constant: true,
    inputs: [],
    name: 'hello',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
];

const web3 = new Web3(Web3.currentProvider || 'ws://localhost:9545');

const contractAddress = '0xF19Aef1e7D3425B81d3Bf7D7b6720C6795DFF165';

const helloWorldContract = new web3.eth.Contract(ABI, contractAddress);

helloWorldContract.methods
  .hello()
  .call()
  .then((res) => console.log(res));

console.log();

web3.eth.getAccounts().then((data) => console.log(data));
