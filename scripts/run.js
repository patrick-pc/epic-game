const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tanjiro", "Eren", "Luffy"], // Names
    [
      "https://i.imgur.com/kWMayHv.gif", // Images
      "https://i.imgur.com/9dSPBsw.gif",
      "https://i.imgur.com/kgnnEFy.gif",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract address:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
