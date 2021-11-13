// configs
const express = require("express");
const app = express();
const http = require("http")
const cors = require('cors')
const { Server } = require('socket.io')
const router = require("./routes")
require('dotenv').config()
const multer = require("multer");

//model
const Comment = require("./model/Comment")

// configs
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);



// socket 
const server = http.createServer(app)
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		method: ["GET", "POST", "PUT", "DELETE"],
	}
})

let users = []
io.on('connection', socket => {
	//console.log(socket.id + ' connection')

	socket.on('joinRoom', id => {
		const user = {userId:socket.id,room:id}
		
		const check = users.every(user => user.userId !== socket.id)
		if(check){
			users.push(user)
			socket.join(user.room)
		}else{
			users.map(user => {
				if(user.userId === socket.id) {
					if(user.room !== id) {
						socket.leave(user.room)
						socket.join(id)
						user.room = id
					}
	
				}
			})

		}
		
		//console.log(users)
		//console.log(socket.adapter.rooms)

	})

	socket.on('CreateComment', async msg => {
		const { id, name,message ,dates} = msg
		const data = {
			Name:name,
			Message:message,
			FeedId: id,
			DateTime:dates
		}
		const newComment = new Comment(data)
		await newComment.save()
		io.to(newComment.FeedId).emit('sendCommentToClient', newComment)
	})

	socket.on('disconnect', () => {
		//console.log(socket.id + ' disconnected')
	})
})

// run server
server.listen(5000, () => {
	console.log("Server is running on port 5000");
});
