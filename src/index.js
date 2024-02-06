const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
// const cron = require('node-cron');
const jobs = require('./utils/job')
const TicketController = require('./controllers/ticket-controller')
// const {sendBasicEmail} = require('./services/email-services')
const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.post('/api/v1/tickets' , TicketController.create);

    app.listen(PORT , () => {
      console.log(`Server started on port ${PORT}`);
      jobs();

    //   sendBasicEmail(
    //     'shubhshubhanjal96@gmail.com',
    //     'shubhshubhanjal7@gmail.com',
    //     'This is a testing email',
    //     'Hey , how are you?'
    //   )

    // cron.schedule('* * * * *', () => {
    //     console.log('running a task every minute');
    //   });
    });
}

setupAndStartServer();