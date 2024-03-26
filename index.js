const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
    useNewUrlParser: true
})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established Successfuly');
})

const itemRouter = require('./routes/items');
const userRouter = require('./routes/users');
const appointmentRouter = require('./routes/appointment');
app.use('/', itemRouter);
app.use('/users', userRouter);
app.use('/appointment', appointmentRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

