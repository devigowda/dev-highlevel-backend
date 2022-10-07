const Transaction = require('../models/transaction');
const Wallets = require('../models/wallets');

const createTransaction = async (req, res) => {
    try{
        const {amount,type}= req.body;
        let currentBal;
       const currentWallet = await Wallets.find({"transactionId":req.params.id});
       if(type === "CREDIT"){
          currentBal = Number(currentWallet[0].balance)+Number(amount);
       } else {
          currentBal = Number(currentWallet[0].balance)-Number(amount);
       }
       await Wallets.findOneAndUpdate({"transactionId":req.params.id}, {balance:currentBal.toFixed(4)}, { returnOriginal: false });
       const updateBal = await Wallets.find({"transactionId":req.params.id});
        const transaction = new Transaction({
            walletId: req.params.id,
            amount: amount,
            type:type,
            balance:currentBal.toFixed(4),
            date:Date.now()
          });
       
        const result = await transaction.save();
        return res.status(201).json({
            status: true,
            message: 'Trancastion successfull',
            data: result
        })
    } catch (err) {
        return res.status(500).json({
            status: true,
            message: `Unable to do transaction. Please try again. \n Error: ${err}`
        })
    }
}

module.exports = { createTransaction };