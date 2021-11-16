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
		const user = { userId: socket.id, room: id }

		const check = users.every(user => user.userId !== socket.id)
		if (check) {
			users.push(user)
			socket.join(user.room)
		} else {
			users.map(user => {
				if (user.userId === socket.id) {
					if (user.room !== id) {
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
		const { id, name, message, dates } = msg
		const data = {
			Name: name,
			Message: message,
			FeedId: id,
			DateTime: dates
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
		  url: "http://128.199.117.96:5000",
		},
	  ],
	  components: {
		securitySchemes: {
		  bearerAuth: {
			type: "http",
			scheme: "bearer",
			bearerFormat: "JWT",
		  },
		},
	  },
	  security: [
		{
		  bearerAuth: [],
		},
	  ],
	},
	apis: ["*.js"],
  };
const swaggerSpecs = swaggerJsdoc(options);

//path open swagger doc
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))


/**
 * @swagger
 * definitions:
 *  Sign-up:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: Name of user
 *     example: 'Kanticha'
 *    email:
 *     type: string
 *     description: Email of user
 *     example: 'Kanticha_33@gmail.com'
 *    password:
 *     type: string
 *     description: Password of user
 *     example: 'Kanticha35194'
 *    confirmpassword:
 *     type: string
 *     description: Confirm password of user
 *     example: 'Kanticha35194'
 *  Sign-in:
 *   type: object
 *   properties:
 *    email:
 *     type: string
 *     description: Email of user
 *     example: 'Kanticha_33@gmail.com'
 *    password:
 *     type: string
 *     description: Password of user
 *     example: 'Kanticha35194'
 *  Feed:
 *   type: object
 *   properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the news
 *           example: 618e4aa01314e23cab3fd46e
 *         Headline:
 *           type: string
 *           description: Headline of news
 *           example: National Flood Relief Appeal
 *         content:
 *           type: string
 *           description: Content of news
 *           example: Australian charity, Rotary Australia World Community Service, today announced the creation of a national Flood Relief Appeal for people impacted by the recent floods up and down the Eastern seaboard. 
 *         description:
 *           type: string
 *           description: description of news
 *           example: Australian charity, Rotary Australia World Community Service, today announced the creation of a national Flood Relief Appeal for people impacted by the recent floods up and down the Eastern seaboard. Australians impacted by the recent floods will be the beneficiaries of money raised by Flood Appeal and will be able to liaise with their local Rotary Club to advise of their needs. The fundraising campaign, which aims to raise in excess of $10 million, was launched this week to support the communities in need after yet another disaster impacting Australians. “The money raised from the Appeal will go directly and quickly to support those impacted, providing essential items and financial support where Disaster relief and Insurance claims won’t stretch,” said Rotary Australia World Community Service Ltd CEO Andrew Woodward. “The number of disasters Australians have endured in the last two years have been significant and left a lot of people in very difficult financial positions,” Mr Woodward said. Rotary Australia World Community Service has previously raised money for Bushfire and Drought affected areas and sees this disaster as just another where the network of Rotarians can step in to assist. Mr Woodward said that he expects the money to help people with the things that insurance or disaster relief funds cannot replace. Whether it be helping farmers build new fences or providing food and clothing to those that have lost everything, the money raised will be crucial in helping families get back on their feet as soon as possible.
 *         imageUrl:
 *           type: string
 *           description: Image of news 
 *           example: flood.png
 *         DateTime:
 *           type: string
 *           description: Date Time create news
 *           example: 11/14/2021, 12:52:58 AM
 *         type:
 *           type: string
 *           description: type of news
 *           example: General News & Current Affairs
 *         status:
 *           type: string
 *           description: status of news
 *           example: ปกติ
 *  Covid:
 *   type: object
 *   properties:
 *         txn_date:
 *           type: string
 *           description: Date Time
 *           example: 2021-11-14
 *         new_case:
 *           type: string
 *           description: new case of covid
 *           example: 7079
 *         total_case:
 *           type: string
 *           description: total case of covid
 *           example: 2018410
 *         new_case_excludeabroad:
 *           type: string
 *           description: new case excludeabroad of covid
 *           example: 7070
 *         total_case_excludeabroad:
 *           type: string
 *           description: total case excludeabroad of covid
 *           example: 2011793
 *         new_death:
 *           type: string
 *           description: new death of covid
 *           example: 47
 *         total_death:
 *           type: string
 *           description: total death of covid
 *           example: 20036
 *         new_recovered:
 *           type: string
 *           description: new recovered of covid
 *           example: 6917
 *         total_recovered:
 *           type: string
 *           description: total recovered of covid
 *           example: 1903065
 *         update_date:
 *           type: string
 *           description: time that data update
 *           example: 2021-11-14 07:31:2
 *  Weather:
 *   type: object
 *   properties:
 *         name:
 *           type: string
 *           description: Country name
 *           example: Thailand
 *         sunrise:
 *           type: string
 *           description: sunrise coordinates
 *           example: 1636845666
 *         sunset:
 *           type: string
 *           description: sunset coordinates
 *           example: 1636886875
 *         description:
 *           type: string
 *           description: description of weather today
 *           example: overcast clouds
 *  Gold:
 *   type: object
 *   properties:
 *         date:
 *           type: string
 *           description: Date today
 *           example: 16 พฤศจิกายน 2564
 *         update_time:
 *           type: string
 *           description: Time that api update
 *           example: เวลา 09:27 น.
 *         buy:
 *           type: string
 *           description: selling price
 *           example: 29,400.00
 *         sell:
 *           type: string
 *           description: purchase price
 *           example: 28,288.56
 *  Comment:
 *   type: object
 *   properties:
 *         Name:
 *           type: string
 *           description: Username
 *           example: Kanticha
 *         Message:
 *           type: string
 *           description: comment
 *           example: wow!
 *         FeedId:
 *           type: string
 *           description: News feed ID
 *           example: 618e4aa01314e23cab3fd46d
 *         DateTime:
 *           type: string
 *           description: Date time comment
 *           example: 11/14/2021, 12:52:58 AM
 *  Question:
 *   type: object
 *   properties:
 *         _id:
 *           type: string
 *           description:  The auto-generated id of the thread
 *           example: 619319c5822eac091a57f051
 *         title:
 *           type: string
 *           description: Title of the thread
 *           example: ชอบเรียนชีวะ เเต่ไม่อยากไปทางหมอพยาบาลเลย มีคณะไหนเเนะนำมั้ยคะ
 *         content:
 *           type: string
 *           description: Content of the thread
 *           example: ชอบเรียนวิชาชีวะมากๆเลยรู้สึกสนุกที่เรียน เเต่ตอนนี้ยังเลือกคณะที่อยากเรียนไม่ได้เลยค่ะ
 *         description:
 *           type: string
 *           description: Description of the thread
 *           example: ตอนนี้หนูอยู่ ม.5เเล้วค่ะ ชอบเรียนวิชาชีวะมากๆเลยรู้สึกสนุกที่เรียน เเต่ตอนนี้ยังเลือกคณะที่อยากเรียนไม่ได้เลยค่ะ ทางบ้านให้ไปทางพยาบาลเเต่หนูรู้สึกว่าไม่ชอบเลยค่ะTTเพราะเป็นคนที่ขี้อายมากๆไม่กล้าพูดคุยกับคนอื่นเท่าไหร่ พี่ๆคิดว่าควรไปทางไหนดีคะ
 *         DateTime:
 *           type: string
 *           description: Date time created the thread
 *           example: 27/09/2564 4:37:10 PM
 *         type:
 *           type: string
 *           description: type of news
 *           example: General News & Current Affairs
 *         status:
 *           type: string
 *           description: status of news
 *           example: ปกติ
 */


/**
  * @swagger
  * /user/sign-up:
  *  post: 
  *   summary: sign up user
  *   tags: [Register Login]
  *   description: sign up to use our web
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Sign-up'
  *   responses:
  *    200:
  *     description: Sign up successful
  *    500:
  *     description: sorry, please sign up again
  * /user/sign-in:
  *  post:
  *   summary: sign in user
  *   tags: [Register Login]
  *   description: sign in to website
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Sign-in'
  *   responses:
  *    200:
  *     description: Sign in successful
  *    500:
  *     description: Error, please sign in again
  * /signin/google:
  *  post:
  *   summary: sign in user with google account
  *   tags: [Register Login]
  *   description: sign in to website with google account
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Sign-in'
  *   responses:
  *    200:
  *     description: Sign in successful
  *    500:
  *     description: Error, please sign in again
  * /feed/GetFeed:
  *  get:
  *   summary: News feed
  *   tags: [Feed]
  *   description: News feed
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Feed'
  *   responses:
  *    200:
  *     description: response news data
  *    500:
  *     description: Error cannot get news feed
  * /feed/GetFeed:id:
  *  get:
  *   summary: Show news only at input id
  *   tags: [Feed]
  *   description: Show news only at input id
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Feed'
  *   responses:
  *    200:
  *     description: response news data
  *    500:
  *     description: Error cannot get news feed
  * /feed/Search/:keyword:
  *  get:
  *   summary: Show searched news
  *   tags: [Feed]
  *   description: Show searched news
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Feed'
  *   responses:
  *    200:
  *     description: response news data
  *    500:
  *     description: Error cannot get news feed
  * /feed/Category/:keyword:
  *  get:
  *   summary:  Show news by category
  *   tags: [Feed]
  *   description: Show news by category
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Feed'
  *   responses:
  *    200:
  *     description: response news data by category
  *    500:
  *     description: Error cannot get news feed
  * /feed/AddFeed:
  *  post:
  *   summary: Add News
  *   tags: [Feed]
  *   description: Add News
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Feed'
  *   responses:
  *    200:
  *     description: response a newly added news
  *    500:
  *     description: Error cannot get news feed
  * /feed/UpdateFeed/:id:
  *  put:
  *   summary: Update News 
  *   tags: [Feed]
  *   description: Update News 
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Feed'
  *   responses:
  *    200:
  *     description: response a newly update news
  *    500:
  *     description: Error cannot update news feed
  * /feedDeleteFeed/:id:
  *  delete:
  *   summary: Delete News 
  *   tags: [Feed]
  *   description: delete news by id
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Feed'
  *   responses:
  *    200:
  *     description: Delete news successful
  *    500:
  *     description: Error cannot delete news 
  * /information/getCovid:
  *  get:
  *   summary: Covid Information
  *   tags: [Information]
  *   description: Covid Information
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Covid'
  *   responses:
  *    200:
  *     description: Covid news information
  *    500:
  *     description: Error cannot get covid news 
  * /information/getWeather:
  *  get:
  *   summary: Weather Information
  *   tags: [Information]
  *   description: Weather Information
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Weather'
  *   responses:
  *    200:
  *     description: Weather news information
  *    500:
  *     description: Error cannot get Weather news 
  * /information/getGold:
  *  get:
  *   summary: Realtime gold Information
  *   tags: [Information]
  *   description: Realtime gold Information
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Gold'
  *   responses:
  *    200:
  *     description: Gold news information
  *    500:
  *     description: Error cannot get Gold news 
  * /comment/commentById/:id:
  *  get:
  *   summary: Comment News
  *   tags: [Comment]
  *   description: Comment News
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Comment'
  *   responses:
  *    200:
  *     description: Comment News successful
  *    500:
  *     description: Error cannot comment news 
  * /question/GetQuestion:
  *  get:
  *   summary: Thread
  *   tags: [Thread]
  *   description: Thread
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Question'
  *   responses:
  *    200:
  *     description: Thread News successful
  *    500:
  *     description: Error cannot post thread 
  * /question/GetQuestionById/:id:
  *  get:
  *   summary: Show thread by Id
  *   tags: [Thread]
  *   description: Show thread by Id
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Question'
  *   responses:
  *    200:
  *     description: Thread News successful
  *    500:
  *     description: Error cannot post thread 
  * /question/Category/:keyword:
  *  get:
  *   summary: Show thread by category
  *   tags: [Thread]
  *   description: Show thread by category
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Question'
  *   responses:
  *    200:
  *     description: Show thread by category
  *    500:
  *     description: Error cannot show thread information 
  * /question/AddQuestion:
  *  post:
  *   summary: Add thread
  *   tags: [Thread]
  *   description: Add thread
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Question'
  *   responses:
  *    200:
  *     description: Add Thread News successful
  *    500:
  *     description: Error cannot add new thread 
  * /question/DeleteQuestionById/:id:
  *  delete:
  *   summary: Delete thread by Id
  *   tags: [Thread]
  *   description:  Delete thread by Id
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Question'
  *   responses:
  *    200:
  *     description: Delete Thread News successful
  *    500:
  *     description: Error cannot delete thread 

  */




// run server
server.listen(5000, () => {
	console.log("Server is running on port 5000");
});
