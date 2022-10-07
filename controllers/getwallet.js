const Wallets = require('../models/wallets');

const getWallet = async (req, res) => {
    try{
        const walletList = await Wallets.find({"transactionId":req.params.id});
        return res.status(201).json({
            status: true,
            message: 'Get Wallets Data successfully',
            data: walletList[0]
        })
        
    } catch (err) {
        return res.status(500).json({
            status: true,
            message: `Unable to get wallet. Please try again. \n Error: ${err}`
        })
    }
}

module.exports = { getWallet };