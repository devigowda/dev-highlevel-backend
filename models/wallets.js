const mongoose =require('mongoose');

const walletSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        trim: true,
        immutable: true,
        unique: true
    },
    balance: {
        type: Number,
        default: 0.00
    },
    transactionId: {
      type: String,
    },
    date:{
      type:Number
    }
  },
  { timestamps: true }
);

const Wallets = mongoose.model('Wallets', walletSchema);
module.exports = Wallets;