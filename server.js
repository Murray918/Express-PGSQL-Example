const methodOverride = require('method-override');
const notesRouter = require('./routes/notes');
const port = process.env.PORT || 3000;
const express = require('express');
const logger = require('morgan');
const path = require('path');

express()
.set('view engine', 'ejs')
.set('views', path.join(__dirname, 'views'))
.use(express.static(path.join(__dirname, 'public')))
.use(methodOverride('_method'))
.use(logger('dev'))
.use(express.json())
.use(express.urlencoded({extended: false}))
.use('/', notesRouter)
.get('*', (req, res) => res.render('404'))
.listen(port, () => console.log(`Listening on ${port}`))

