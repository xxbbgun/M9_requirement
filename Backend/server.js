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
 *           description: The auto-generated id of the user
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
 *     Sign in:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - confirmpassword
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
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
 *     Feed:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the news
 *         Headline:
 *           type: string
 *           description: Headline of news
 *         content:
 *           type: string
 *           description: Content of news
 *         description:
 *           type: string
 *           description: description of news
 *         imageUrl:
 *           type: string
 *           description: Image og news 
 *         DateTime:
 *           type: string
 *           description: Date Time create news
 *         type:
 *           type: string
 *           description: type of news
 *         status:
 *           type: string
 *           description: status of news
 *       example:
 *         _id: 618e4aa01314e23cab3fd46e
 *         Headline: National Flood Relief Appeal
 *         content: Australian charity, Rotary Australia World Community Service, today announced the creation of a national Flood Relief Appeal for people impacted by the recent floods up and down the Eastern seaboard. 
 *         description: Australian charity, Rotary Australia World Community Service, today announced the creation of a national Flood Relief Appeal for people impacted by the recent floods up and down the Eastern seaboard. Australians impacted by the recent floods will be the beneficiaries of money raised by Flood Appeal and will be able to liaise with their local Rotary Club to advise of their needs. The fundraising campaign, which aims to raise in excess of $10 million, was launched this week to support the communities in need after yet another disaster impacting Australians. “The money raised from the Appeal will go directly and quickly to support those impacted, providing essential items and financial support where Disaster relief and Insurance claims won’t stretch,” said Rotary Australia World Community Service Ltd CEO Andrew Woodward. “The number of disasters Australians have endured in the last two years have been significant and left a lot of people in very difficult financial positions,” Mr Woodward said. Rotary Australia World Community Service has previously raised money for Bushfire and Drought affected areas and sees this disaster as just another where the network of Rotarians can step in to assist. Mr Woodward said that he expects the money to help people with the things that insurance or disaster relief funds cannot replace. Whether it be helping farmers build new fences or providing food and clothing to those that have lost everything, the money raised will be crucial in helping families get back on their feet as soon as possible.
 *         imageUrl: flood.png
 *         DateTime: 11/14/2021, 12:52:58 AM
 *         type: General News & Current Affairs
 *         status: ปกติ
 */



/**
 * @swagger
 * /user/sign-up:
 *   post:
 *     summary: Sign up
 *     tags: [Sign up]
 *     responses:
 *       200:
 *         description: Sign up
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sign up'
 * /user/sign-in:
 *   post:
 *     summary: Sign in
 *     tags: [Sign in]
 *     responses:
 *       200:
 *         description: Sign in
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sign in'
 * /user/sign-in/google:
 *   post:
 *     summary: Sign in
 *     tags: [Sign in with google]
 *     responses:
 *       200:
 *         description: Sign in
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sign in'
 * /feed/GetFeed:
 *   get:
 *     summary: News feed
 *     tags: [Feed]
 *     responses:
 *       200:
 *         description: News feed
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Feed'
 */
// run server
server.listen(5000, () => {
	console.log("Server is running on port 5000");
});


//  *       required:
//  *         - Headline
//  *         - content
//  *         - description
//  *         - imageUrl
//  *         - DateTime
//  *         - type
//  *         - status

// *       	type: General News & Current Affairs
// * 		 	status: ปกติ