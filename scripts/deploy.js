const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ['Tanjiro', 'Eren', 'Luffy'], // Character names
    [
      'https://i.imgur.com/kWMayHv.gif', // Character images
      'https://i.imgur.com/9dSPBsw.gif',
      'https://i.imgur.com/kgnnEFy.gif',
    ],
    [100, 200, 300], // Character hp values
    [100, 50, 25], // Character damage values
    'Elon Musk', // Boss name
    'https://i.imgur.com/AksR0tt.png', // Boss image
    10000, // Boss hp
    50 // Boss damage
  )
  await gameContract.deployed()
  console.log('Contract address:', gameContract.address)

  let txn = await gameContract.mintCharacterNFT(0)
  await txn.wait()
  console.log('Minted NFT #1')

  txn = await gameContract.mintCharacterNFT(1)
  await txn.wait()
  console.log('Minted NFT #2')

  txn = await gameContract.mintCharacterNFT(2)
  await txn.wait()
  console.log('Minted NFT #3')

  txn = await gameContract.mintCharacterNFT(1)
  await txn.wait()
  console.log('Minted NFT #4')

  console.log('Done deploying and minting!')
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
