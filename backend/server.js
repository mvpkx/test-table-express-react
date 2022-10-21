require('dotenv').config();
const cors = require('cors');

const express = require('express');
const morgan = require('morgan');
const itemsRouter = require('./routes/items.route');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(morgan('dev'));

app.use('/api', itemsRouter);

app.listen(PORT, () => console.log(`Backend server started at ${PORT}`));
