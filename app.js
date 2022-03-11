const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=03ed1cd929834798f4a12e26bf467261&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             console.log('Unable to connect to weather service!')
//         } else if (response.body.error) {
//             console.log('Unable to find location')
//         } else {
//             console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
//         }
//     })

// // Geocoding
// // Address -> Lat/Long -> Weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWFzaHNoZWtoYXIwMyIsImEiOiJjbDBsYmJmd3QwdW55M2t1b2g0Mmp5czZ1In0.Um0kVron1NmHUuhnFXhOAA&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })


geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})