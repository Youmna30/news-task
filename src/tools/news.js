
const request = require('request')
const forecast = (country,callback) =>{
    const url = 'https://newsapi.org/v2/top-headlines?country='+country+'&apiKey=b7a1937bf275496494346d6fe2bbe869'
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect news service',undefined)
        }
        else if(response.body.totalResults == 0){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,response.body.articles)
        }
    })
}

module.exports = forecast