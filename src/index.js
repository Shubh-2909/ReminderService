const express = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
const cron = require('node-cron');
// const {sendBasicEmail} = require('./services/email-services')
const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT , () => {
      console.log(`Server started on port ${PORT}`)

    //   sendBasicEmail(
    //     'shubhshubhanjal96@gmail.com',
    //     'shubhshubhanjal7@gmail.com',
    //     'This is a testing email',
    //     'Hey , how are you?'
    //   )

    cron.schedule('* * * * *', () => {
        console.log('running a task every minute');
      });
    });
}

setupAndStartServer();