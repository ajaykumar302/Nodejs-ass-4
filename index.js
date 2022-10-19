const express = require('express');
const authentication = require("./Route/authentication")
const app = express();
let port = 5050;


app.use(express.json());
app.use('/auth',authentication)

app.get('/',(req,res) =>{
    res.send('Its Working fine!!!')
})
app.listen(port,() =>{
    console.log(`Connected to port ${port}✅`);
})