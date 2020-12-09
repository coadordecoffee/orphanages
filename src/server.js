//import dependencies
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//iniciando express
const server = express()
server
    //utilize req body
    .use(express.urlencoded({extended:true}))

    //use static files
    .use(express.static('public'))

    //configure template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //application routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

    //turn on server
    .listen(5500)