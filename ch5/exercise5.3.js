const express = require('express');
const app = express();
const {runQuery} = require('./database');

const port = 3000;

app.get('/fare', (req, res) => {
    try {
        const { uid } = req.query;
        const sql = 'SELECT users.name, ' +
        'Sum(Round(types.fare_rate * trains.distance / 1000, -2)) AS totalFare ' +
        'FROM tickets ' +
        'INNER JOIN users ON tickets.user = users.id and users.id = ? ' +
        'INNER JOIN trains ON tickets.train = trains.id ' +
        'INNER JOIN types ON trains.type = types.id';
        const { name, totalFare } = runQuery(sql, [parseInt(uid, 10)])[0];
        return res.send(`Total fare of ${name} is ${totalFare} KRW.`);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);   
    }
});

app.get('/train/status', (req, res) => {
    try {
        const { tid } = req.query;
        const sql = 'SELECT Count(*) AS occupied, max_seats AS maximum FROM tickets ' +
        'INNER JOIN types ON trains.type = types.id AND tickets.train = ?';
        const { occupied, maximum } = runQuery(sql, [parseInt(tid, 10)])[0];
        const isSeatsLeft = occupied < maximum;
        return res.send(`Train ${tid} is ${isSeatsLeft ? 'not sold out' : 'sold out'}`);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});
    

app.listen(port, () => {
    console.log('server is running');
});