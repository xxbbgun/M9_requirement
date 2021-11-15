
const axios = require('axios')
require('dotenv').config()
console.log(process.env.WEATHER_API_KEY)
module.exports = {
    GetCovid: async (req, res, next) => {
		try{
			const covidData = await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
			return res.status(200).json(covidData.data)
		}catch (error) {
			return res.status(500).json({msg: error.message})
		}
	},
	GetWeather: async (req, res, next) => {
		try{
			const WeatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Thailand&appid=${process.env.WEATHER_API_KEY}`)
			return res.status(200).json(WeatherData.data)
		}catch (error) {
			return res.status(500).json({msg: error.message})
		}
	},
	GetGold: async (req, res, next) => {
		try{
			const GoldData = await axios.get(`https://thai-gold-api.herokuapp.com/latest?fbclid=IwAR0DqLx6Bo7Kj7wl4NT6jh3kR3BItoy_MbIzXr8oBv-g5Myj7MZ6vs6u00M`)
			return res.status(200).json(GoldData.data)
		}catch (error) {
			return res.status(500).json({msg: error.message})
		}
	},
};
