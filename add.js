// add.js

const { ethers } = require("ethers");

// ====== CHANGE THESE ======
const PRIVATE_KEY = "keyhere"; // Private key of sender
const RPC_URL = "rpchere"; // or Alchemy

// Contract info
const CONTRACT_ADDRESS = "0xf739d03e98e23a7b65940848aba8921ff3bac4b2"; // StakingAssetHandler
const ABI = [
  "function addValidator(address targetProtocol, address validatorAddress)"
];

// Function parameters
const targetProtocol = "0xaddress"; // Replace with correct rollup
const validatorAddress = "0xaddress"; // Replace with your validator

async function main() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  

  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

  const iface = new ethers.Interface(ABI);
  const data = iface.encodeFunctionData("addValidator", [
    targetProtocol,
    validatorAddress,
  ]);

  const nonce = await provider.getTransactionCount(wallet.address);
  const gasLimit = 300000;
  const maxFeePerGas = ethers.parseUnits("100", "gwei");
  const maxPriorityFeePerGas = ethers.parseUnits("100", "gwei");
  const chainId = 11155111; // Sepolia

  const tx = {
    to: CONTRACT_ADDRESS,
    nonce,
    data,
    chainId,
    gasLimit,
    maxFeePerGas,
    maxPriorityFeePerGas,
    type: 2, // EIP-1559
  };

 
 
 const sentTx = await wallet.sendTransaction(tx);

console.log("\n📤 Broadcasted TX Hash:", sentTx.hash);
console.log("🔍 View on Etherscan: https://sepolia.etherscan.io/tx/" + sentTx.hash);

}

main().catch(console.error);
// Commit 2
// Commit 3
// Commit 4
// Commit 5
// Commit 6
// Commit 7
// Commit 8
// Commit 9
// Commit 10
// Recommit 1
// Recommit 2
// Recommit 3
// Recommit 4
// Recommit 5
// Recommit 6
// Recommit 7
// Recommit 8
