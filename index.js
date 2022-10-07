const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

const app = express();


app.use(cors({
    origin: '*'
}));
app.use(express.json())

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Unable to connect to MongoDB');
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const walletRoutes = require( './routes/wallets');
app.use('/', walletRoutes);