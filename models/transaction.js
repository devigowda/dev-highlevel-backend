const mongoose =require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    amount: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0.00
    },
    walletId: {
      type: String,
    },
    type: {
        type: String,
    },
    date:{
        type:Number
      }
  },
  { timestamps: true }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;