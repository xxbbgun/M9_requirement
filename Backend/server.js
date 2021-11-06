// configs
const express = require("express");
const app = express();
const http = require("http")
const cors = require('cors')
const {Server} = require('socket.io')
const router = require("./routes")

//model
const Comment = require("./model/Comment")

// configs
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);



// socket 
const server = http.createServer(app)
const io = new Server(server,{
	cors:{
		origin:"http://localhost:3000",
		method:["GET", "POST", "PUT", "DELETE"],
	}
})
io.on('connection', socket => {
    console.log(socket.id + 'connection')

	socket.on('CreateComment', async msg => {
		const {name , message} = msg
		const newComment = new Comment({name,message})
        await newComment.save()

		
		//io.emit('message', { name, message })
	  })

	socket.on('disconnect', () => {
		console.log(socket.id + ' disconnected') 
	})
  })
  

// run server
server.listen(5000, () => {
	console.log("Server is running on port 5000");
});
