var express = require('express');
var router = express.Router();
const db = require('./db.js');

router.get('/', (req, res, next) => {
    db.query('SELECT id, action_date AS "actionDate", action_type AS "actionType", item_description as "itemDescription", price FROM item ORDER BY action_date desc', req.params.id, function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        res.send(rows);
    });
});

router.post('/', (req, res, next) => {
    db.query('INSERT INTO item (action_date, action_type, item_description, price) VALUES(?,?,?,?)',
        [req.body.actionDate, req.body.actionType, req.body.itemDescription, req.body.price], function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            res.send(rows[0]);
        });

    res.sendStatus(200);
});

router.get('/:id', (req, res, next) => {
    db.query('SELECT id, action_date AS "actionDate", action_type AS "actionType", item_description as "itemDescription", price FROM item WHERE item.id = ?',
        req.params.id, function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            res.send(rows[0]);
        });
});

router.put('/:id', (req, res, next) => {
    db.query('UPDATE item set item.action_date=?, action_type=?, item_description=?, price=? WHERE item.id = ?',
        [req.body.actionDate, req.body.actionType, req.body.itemDescription, req.body.price, req.params.id], function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            res.sendStatus(200);
        });
});

router.delete('/:id', (req, res, next) => {
    db.query('DELETE FROM item WHERE item.id = ?', req.params.id, function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        res.sendStatus(200);
    });
});
module.exports = router;
