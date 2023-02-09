const contractsCtrl = {};
const contractFile = require('../models/Contract');
const Web3 = require('web3');
const bytecode  = contractFile.evm.bytecode.object;
const abi = contractFile.abi;


//const web3 = new Web3('https://rpc.testnet.moonbeam.network'); //Moonbase Alpha
//const addressTo = '0xd4c73514f51faeB1A87055E9939fb1bf3d5DC3a1';

contractsCtrl.deployContract = async (req, res) => {
    console.log(req.body);
    const { privateKey, addressFrom, web3Addr } = req.body;
    console.log(privateKey, addressFrom, web3Addr);
    console.log("1");
    const web3 = new Web3(web3Addr);
    console.log("2");
    const exchange = new web3.eth.Contract(abi);
    console.log("3");

    const exchangeTx = exchange.deploy({
        data: bytecode,
        //arguments: [0],
    });
    console.log("4");
    console.log(privateKey);
    const createTx = await web3.eth.accounts.signTransaction(
        {
            from: addressFrom,
            data: exchangeTx.encodeABI(),
            gas: '10000000',
        },
        privateKey
    );
    console.log("5");
    const createReceipt = await web3.eth.sendSignedTransaction(
        createTx.rawTransaction
    );
    console.log("Desplegando contrato en la dirección ", createReceipt.contractAddress);
    console.log("https://app.getpostman.com/join-team?invite_code=bf80be00911f8fed308c6f43b64f69b2");
    res.json({Message: 'Desplegando contrato en la dirección ' + createReceipt.contractAddress})
};

contractsCtrl.updateContract = async (req, res) => {
    const { adminKey, addressFrom, web3Addr, contractAddress, newState, newPayment } = req.body;
    console.log(addressFrom, adminKey, web3Addr, contractAddress, newState, newPayment);
    const web3 = new Web3(web3Addr);

    const exchange = new web3.eth.Contract(abi, contractAddress);
    let encoded;
    if (newState) {
        encoded = exchange.methods.setState(newState).encodeABI();  //Codifica y envía el nuevo valor de state al contrato
    }
    if (newPayment != null) {
        encoded = exchange.methods.setPayment(newPayment).encodeABI();  //Codifica y envía el nuevo valor de payment al contrato
    }
    

    const createTx = await web3.eth.accounts.signTransaction(
        {
            from: addressFrom,
            to: contractAddress,
            data: encoded,  
            gas: '10000000',
        },
        adminKey
    );

    const createReceipt = await web3.eth.sendSignedTransaction(
        createTx.rawTransaction
    );
    console.log("Ejecutando un cambio en el valor de la variable state resultó en ", createReceipt.transactionHash);
    res.json({Message: "Ejecutando un cambio en el valor de la variable state resultó en " + createReceipt.transactionHash})
}

contractsCtrl.deleteContract = async (web3Addr, publicKey, privKey) => {
    console.log(publicKey, privKey, web3Addr);
    return false;
}

contractsCtrl.getContract =  async (req, res) => {
    const { addressFrom, web3Addr, contractAddress } = req.body;

    const web3 = new Web3(web3Addr);
    const exchange = new web3.eth.Contract(abi, contractAddress);

    console.log('Ejecutando función para conocer el valor de la variable state del contrato en la dirección', contractAddress);
    const state = await exchange.methods.state().call({from: addressFrom});
    const payment = await exchange.methods.payment().call({from: addressFrom});
    console.log('El estado actual es', state);
    console.log('El monto actual es', payment);
    res.json({Message: 'El estado actual es ' + state + '  El monto actual es ' + payment})
}

module.exports = contractsCtrl;