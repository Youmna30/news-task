
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const publicDirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const hbs = require('hbs')

app.use(express.static(publicDirectory))
app.set('view engine', 'hbs');
app.set('views',viewsPath)


const news = require('./tools/news')

app.get('/news',(req,res)=>{
  if(!req.query.country){
   return res.render('notfoundpage',{
     error:'You must provide country'
   })
  }
  news(req.query.country,(error,data)=>{
    if(error){
      return res.render('notfoundpage',{
        error})
    }
    console.log(data);
    res.render('index',{
      data
    })
  })
})

app.get('*',(req,res)=>{
  res.render('notfoundpage',{
    title:'Not found',
    name:'Default page'
  })
})









app.listen(port, () => {
  console.log('Server is running',port)
})