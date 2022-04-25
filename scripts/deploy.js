const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ['Tanjiro', 'Eren', 'Luffy'], // Character names
    [
      'QmVifKUaeSUDcz4YxBAkLhnatPG3R5oWcWsbSFrm9sgFEQ', // Character images
      'QmaYgbLhac6HosV9foD5AtEnLRbzPSa6YAU2MPL9f44tho',
      'QmcumB7XENFaNNrqKw2SkeuooPbHK6VGogskwUoDFa8p9U',
    ],
    [100, 200, 300], // Character hp values
    [100, 50, 25], // Character damage values
    'Elon Musk', // Boss name
    'Qmens3TSDu2rpf7KSdoNGZdnLkN9CnS2mX7eyt6KUF4uNi', // Boss image
    10000, // Boss hp
    50 // Boss damage
  );
  await gameContract.deployed();
  console.log('Contract address:', gameContract.address);
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
