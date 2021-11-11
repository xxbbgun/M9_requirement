
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
};
