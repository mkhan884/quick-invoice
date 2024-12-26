const express = require ('express')
const userRouter = require ('./routes/userRoutes')
const invoiceRouter = require('./routes/invoiceRoutes')
const mysql = require('mysql2');
const app = express()
const dotenv = require('dotenv');
var cors = require('cors')
app.use(express.json())
dotenv.config()

// Server Set up

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
});


db.connect((err) => {
    if (err) {
      console.log(process.env.PASSWORD, process.env.DB_USER)
      console.error('Error connecting to MySQL' + err.stack);
      return;
    }
    console.log('Connected to MySQL database');
});


app.use(cors())

app.use('/users', (req, res, next) =>{
  req.db = db;
  next();  
}, userRouter)

app.use('/invoice', (req,res, next) =>{
  req.db = db;
  next();
}, invoiceRouter)