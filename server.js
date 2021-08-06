var express = require("express");
var app = express()


let http = require('http').createServer(app);
let io = require('socket.io')(http);
const bodyParser = require('body-parser');




var port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());


app.get('/api/projects',(req,res)=>{
    console.log('project requested')
    res.send(dummyData)
})



app.listen(port,()=>{
    console.log("Application has started on port: ", port)
})