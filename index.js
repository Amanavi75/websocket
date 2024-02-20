const http  = require("http");
const express = require("express")
const {Server} = require("socket.io")
const app = express();
const path = require('path');


const server = http.createServer(app)
const io = new Server(server)
//* this particular thing will manage our all the sockets 


const port = 8000

// socket, means client  
io.on('connection',(socket)=>{
    socket.on("user-message",(message)=>{
        io.emit('message',message);
    });

})

app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    return res.sendFile('../public/index.html')
     
})

server.listen(8000,()=>console.log(`server started at ${port}`))

