'use strict';

const express = require('express');
const cors = require('cors');
const weather = require('./weather.json');
const app = express();

app.use(cors());

class Forecast {
    constructor(city) {
        this.city = city.city;
        this.lat = city.lat;
        this.lon = city.lon;
    }

    static cityIndex() {
        let x = 0;
        let index = 0;
        weather.forEach(item => {
            if (this.lat === item.lat && this.lon === item.lon) {
                index = x;
            }
            x++;
        });
        return index;
    }

    threeDayForecast() {
        let index = Forecast.cityIndex();
        console.log(weather[index]);
        let arr = weather[index].data;
        let forecast = arr.map(item => {
            return ({
                'description': 'Low of ' + String(item.low_temp) + ', high of ' + String(item.high_temp) + ' with ' + item.weather.description,
                'date': item.datetime
            });
        });
        return forecast;
    }
}

app.get('/weather', (request, response) => {
    let city = request.query;
    console.log(city);
    let weatherReport = new Forecast({ 'city': city.city, 'lat': Number(city.lat), 'lon': Number(city.lon) });
    response.send(weatherReport.threeDayForecast());
    response.status(200);
    console.log(weatherReport.threeDayForecast());
});

app.listen(3001, () => {
    console.log('app is running');
});

