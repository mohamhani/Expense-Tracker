const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({path: './config/config.env'});

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));