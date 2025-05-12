const express = require('express');
const dotenv = require('dotenv');
const {connectDB} = require('./config/db');
const authRoutes=require("./routes/authRoutes")
const userModelRoutes=require("./routes/userModelRoutes")
const socketRoutes=require("./routes/socketRoutes")
const InstaRoutes=require("./routes/InstaRoutes")
const http = require('http');
const cors = require('cors');
const path = require('path'); 

// const app = express();

// const server = http.createServer(app);
const { server, app } = require('./socketIO/Server');
const { default: mongoose } = require('mongoose');


dotenv.config();
connectDB();
// InsConnect()

app.use(cors())
app.use(express.json());

// Serve static files from the React app

app.use(express.static(path.join(__dirname, 'client/build')));



app.get('/api', (req,res)=>{
    res.status(200).json({msg:"server is running"})
    
});
app.use('/api/auth', authRoutes);
app.use('/api/user', userModelRoutes);
app.use('/api/insta', InstaRoutes);
app.use('/api/socket', socketRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
