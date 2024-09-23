const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./routes/user');
const fileRouter = require('./routes/file');
const cors = require("cors");
const app = express();
const port = 3000;

mongoose
.connect(
  "mongodb+srv://nks854338:Nandani50%25@students.a0ydx.mongodb.net/User"
)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Mongo Error", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'https://file-handling-plum.vercel.app/', 
  methods: 'GET, POST',
  credentials: true,
}));
app.use(cors());
app.use('/users', userRouter);  
app.use('/files', fileRouter); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
