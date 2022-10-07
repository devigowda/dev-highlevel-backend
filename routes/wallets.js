const express = require('express');
const router = express.Router();

const Wallets = require('../controllers/wallets');
const getWallets = require('../controllers/getwallet');
const addTransaction = require('../controllers/addTransaction');
const getTransaction = require('../controllers/getTransaction')

router.post('/setup', Wallets.createWallet);
router.get('/wallet/:id', getWallets.getWallet);
router.post('/transact/:id', addTransaction.createTransaction);
router.get('/transactions', getTransaction.getTransaction);

module.exports = router;