const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

app.post('/api/email', (req, res, next) =>{
    sendGrid.setApiKey('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');
    const msg = {
        to: 'callumwhite210@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }
    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log('error: ', err);
            res.status(401).json({
                success:false
            });
        })
});

//react on port 3000
app.listen(3030, '0.0.0.0');