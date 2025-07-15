require('dotenv').config();
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const connectDb = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

app.use(cors())
app.use(express.json());
app.use('/api/auth',require("./routes/authRoutes"));
app.use('/api/posts',require("./routes/posts"));
app.use('/api/categories',require("./routes/category"));


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use(errorHandler);

app.listen(PORT,()=>{
  console.log(`the server is running on http://localhost:${PORT}`);
})