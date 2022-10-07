const Transaction = require('../models/transaction');

const getTransaction = async (req, res) => {
    try{
       const pageOptions = {
        skip: parseInt(req.query.skip, 0) || 0,
        limit: parseInt(req.query.limit, 10) || 10
    }
        let totalCount = await Transaction.count({"walletId":req.query.walletId});
    const transactionList = await Transaction.find({"walletId":req.query.walletId})
        .skip(pageOptions.skip)
        .limit(pageOptions.limit)
        .exec()
        return res.status(201).json({
            status: true,
            message: 'Add Transaction successfully',
            totalPages:Math.ceil(totalCount/pageOptions.limit),
            data: transactionList
        })
        
    } catch (err) {
        return res.status(500).json({
            status: true,
            message: `Unable to add Transaction. Please try again. \n Error: ${err}`
        })
    }
}

module.exports = { getTransaction };