const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')
const colors = require('colors')
const figlet = require('figlet')
const {promisify} = require('util')

const promisifiedFiglet = promisify(figlet)

const main = async (places) => {
    const location = await getLocation(places)
    const weather = await getWeather(location)
    const temp = await Math.floor((weather.temperature - 32) * 5/9)
    const data = await promisifiedFiglet('Weather', {
        font: 'speed'
    })
    console.log(data.rainbow)
    console.log(`The temperature in ${location.name.green} is ${colors.blue(temp)}°C
    and the proberbility of rain is ${weather.precipProbability}`)
    
}

main(process.argv[2])



// request({url: `https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`,JSON: true}, (error, responce) => {
//     if(error){
//         console.log(error)
//     }else{
//         const data = responce.body
//         console.log({temp: data.currently.temperature, rain: data.currently.precipProbability})
//     }

// })

