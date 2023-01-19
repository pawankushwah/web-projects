// const express = require("express");
// const app = express();

// const http = require("http");
// const server = http.createServer(app);
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send("<h1>hello from pawan</h1>");
// });
// app.get('', (req, res) => {
//     res.send("<h1>hello from pawan</h1>");
// });

// server.listen(port, ()=>{
//     console.log(`listening on http://localhost:${port}`);
// })

const io = require('socket.io')(8000, {
    cors:{
        origin: "http://localhost:5173"
    }
});
    
const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New User joined : ", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('message', text => {
        socket.broadcast.emit('receive', text);
        // socket.broadcast.emit('receive', message);
    });
});