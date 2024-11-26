const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./routes/user');
const fileRouter = require('./routes/file');
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const port = 3000;

dotenv.config();

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Mongo Error", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET, POST',
  credentials: true,
}));
app.use(cors());
app.use('/users', userRouter);  
app.use('/files', fileRouter); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
