require ('dotenv').config();
const express = require('express');
const mongoose=require('mongoose');

const app = express();
const port = 3010;

app.use(express.json());
const MONGO_URI='mongodb://localhost:27017/eventsDB';
const PORT=process.env.port||3000

mongoose.connect(MONGO_URI,{
  useUnifiedTopology:true,
  useNewUrlParser:true
})
.then(()=>{
  console.log("Connected to MongoDB");
})
.catch((err)=>{
  console.log(`Error connecting to MongoDB${err}`);
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
