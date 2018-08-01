var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET events listing. */
router.get('/', function (req, res, next) {
    model.events.findAll({})
        .then(events => res.json({
            error: false,
            data: events
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

 
 
/* POST events. */
router.post('/', function (req, res, next) {
    const {
        from,
        to,
        expired_date,
        user_id,
        status,
        weight_kg
    } = req.body;
    model.events.create({
            from: from,
            to: to,
            user_id: user_id,
            status: 'open',
            weight_kg: weight_kg,
            expiredAt: expired_date
        })
        .then(event => res.status(201).json({
            error: false,
            data: event,
            message: 'New event has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
/* update event. */
router.put('/:id', function (req, res, next) {
 
    const id = req.params.id;
 
    const { 
        from,
        to,
        expired_date,
        assigned_user_id,
        status,
        weight_kg
    } = req.body;
    model.events.update({
            from: from,
            to: to,
            expiredAt: expired_date,
            assigned_user_id: assigned_user_id,
            status: status,
            weight_kg: weight_kg
        }, {
            where: {
                id: id
            }
        })
        .then(event => res.status(201).json({
            error: false,
            message: 'event has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* DELETE event listing. */
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
 
    model.events.destroy({ where: {
        id: id
    }})
        .then(status => res.status(201).json({
            error: false,
            message: 'event has been delete.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;
