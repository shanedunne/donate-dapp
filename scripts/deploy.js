const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const Donate = await hre.ethers.getContractFactory("Donate");
  const donate = await Donate.deploy();

  await donate.deployed();

  console.log("Donate deployed to:", donate.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
