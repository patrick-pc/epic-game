const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const CONTRACT_ADDRESS = '0xcCaD1A50fa91C7d0cBd12F4fED13780dFBE81ECb';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export {
  TWITTER_HANDLE,
  TWITTER_LINK,
  CONTRACT_ADDRESS,
  transformCharacterData,
};
