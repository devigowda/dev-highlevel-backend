const Wallets = require('../models/wallets');
const uuid = require('uuid');;

const createWallet = async (req, res) => {
    try{
        const {username,balance}= req.body;
  
        const wallets = new Wallets({
            username: username,
            balance: balance,
           transactionId:uuid.v4(),
           date:Date.now()
          });
        const result = await wallets.save();
        return res.status(201).json({
            status: true,
            message: 'Wallets created successfully',
            data: result
        })
    } catch (err) {
        return res.status(500).json({
            status: true,
            message: `Unable to create wallet. Please try again. \n Error: ${err}`
        })
    }
}

module.exports = { createWallet };