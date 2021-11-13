// configs
const express = require("express");
const app = express();
const http = require("http")
const cors = require('cors')
const { Server } = require('socket.io')
const router = require("./routes")
require('dotenv').config()
const multer = require("multer");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

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

//swagger
const options = {
	swaggerDefinition: {
	  openapi: "3.0.1",
	  info: {
		title: "News API",
		version: "1.0.0",
	  },
	  servers: [
		{
		  url: "http://localhost:5000",
		}
	  ]
	},
	apis: ["*.js"],
  };
  const swaggerSpecs = swaggerJsdoc(options);
  
  //path open swagger doc
  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))
  

/**
 * @swagger
 * components:
 *   schemas:
 *     Sign up:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - confirmpassword
 * 	
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The name of user 
 *         email:
 *           type: string
 *           description: The email of user 
 *         password:
 *           type: string
 *           description: The password of user 
 *         confirmpassword:
 *           type: string
 *           description: The confirm password of user 
 *       example:
 *         token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThmY2NmMTI0YTJmOWJhZDYwNmI0YWEiLCJpYXQiOjE2MzY4MTQwNjYsImV4cCI6MTYzNjkwMDQ2Nn0.jQB6nkVshlAJ-3vrHRiFqic4axAfNbBHYcKgGyoJ1vc
 *         user: 
 *            name: Kanticha
 *            role: customer
 */


/**
 * @swagger
 * /user/sign-up:
 *   post:
 *     summary: Returns the list of all the books
 *     tags: [Sign up]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sign up'
 */
// run server
server.listen(5000, () => {
	console.log("Server is running on port 5000");
});
