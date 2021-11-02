const ABI = [
  {
    constant: true,
    inputs: [],
    name: 'last_completed_migration',
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
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
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
        name: 'completed',
        type: 'uint256',
      },
    ],
    name: 'setCompleted',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// const addresss = '0xF19Aef1e7D3425B81d3Bf7D7b6720C6795DFF165';

// let strorageContract = new web3.eth.Contract(ABI, addresss);

async function inititalizeApp() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const USER = await ethereum.request({ method: 'eth_requestAccounts' });
      document.querySelector('body').innerHTML = '<h2> Req Accepted </h2>';
      return new Promise((resolve, reject) => {
        resolve(USER);
      });
    } catch (e) {
      document.querySelector('body').innerHTML = '<h2> Req Rejected </h2>';
      return new Promise((resolve, reject) => {
        let web3 = new Web3('http://127.0.0.1:9545');
        if (web3) {
          resolve(web3);
        } else {
          reject({ err: 'Something Went Wrong' });
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  let USER = await inititalizeApp();
  console.log('from local');
  console.log(USER);
});
