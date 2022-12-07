const hre = require("hardhat");

// contract deployed to 0xF62538114392a17d96cAA53Da7ed3DC41c2c97e8

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
