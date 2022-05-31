require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain uncover inflict arena front gentle'; 
let testAccounts = [
"0xd2b1d30fae8a8598ee15d2ee6911478499e9411414d195a84f09f022c1e705aa",
"0x3f270c0ad029f2ec25a96e54a4234801e0708ec63f3e08d2c31e0a6d77bb6b47",
"0x3076e2d2525c38b84b0e231524dd4d9a74b71b9dab2bebfe55907c4057c4c928",
"0x81ccb68929087e49565da4c93d680667873f373d961baaaea0684d11bba96ad1",
"0x0d09ba5b7369ccd85513e6c714bc85ca789b098b19a9c7de241cbeb8d0be57e4",
"0x902fa85d5f510c6bd9119b025a77f08362778df5ac6cd89451c4b02fb0f17c46",
"0xe57b51f00c1eddb9912e638f59042f1a6d96434b5dbb4366576bddfb6e8fc0db",
"0xc2e8139b75af286f1683fa3294972ae9d40439284a3d743f6e6328616e714f11",
"0x3fa4d5999250ca7d4c80de42fece7537c357839f98ae20ec00c3fd65e51e78d9",
"0xf28d3c4f7f5e1839895fe1c0ad27b6d0d8f9a985b152d654b70cec16384af496"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


