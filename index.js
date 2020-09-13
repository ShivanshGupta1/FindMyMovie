const express = require('express');
const request = require('request');
const app = express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null })

});
app.listen(3000, () => {
    console.log("server ")
})


app.post('/', (req, res) => {
    let moviename = req.body.city_name
    let apikey = '3c5652e1bcmsh6b58e18266de2c0p1437bdjsn6dfb08d48596'
    var options = {
        url: `https://imdb8.p.rapidapi.com/title/auto-complete?q=${moviename}`,
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': '3c5652e1bcmsh6b58e18266de2c0p1437bdjsn6dfb08d48596',
          useQueryString: true
        }
      };
    request(options, function (error, response, body) {
        if (error) {
            res.render('index', { weather: null, error: 'Error Please try again' })
        }
        else {
            weather = JSON.parse(body);
             console.log(weather)



            res.render('index', { weather: weather, error: null })
        }
    });

})
