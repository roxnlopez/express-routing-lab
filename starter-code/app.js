//Did you use npm install to
//add all these packages
//to our project?
const express = require('express');
const app = express();
const port    = process.env.PORT || 3000;
const candyRouter = require('./candyRouter.js');
const bodyParser = require('body-parser');
// How do we 'require' the candyRouter file?


//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use(bodyParser.json());
app.use('/candies', candyRouter);

app.listen(3000);