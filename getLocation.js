const request = require ('request')
const {promisify} = require('util')
const pk = "pk.eyJ1IjoiYWxleGFuZGVya2VlbiIsImEiOiJjazBucWlkcXowMmd1M2NzMzJyeGt1eW41In0.qHaV6xO2ezQkRzQEl2NVAA"

const promisifiedRequest = promisify(request)

const getLocation = async (places) => {
    try {
        let data1 = await promisifiedRequest({url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${places}.json?access_token=${pk}`, json: true})        
        return({
            name: data1.body.features[0].place_name,
            lat: data1.body.features[0].center[0],
            lng: data1.body.features[0].center[1]
        })
    } catch (error) {
        console.log("ooops error has occured")
    }
}

module.exports = {
    getLocation
}