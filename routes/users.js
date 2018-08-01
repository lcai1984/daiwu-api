var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET users listing. */
router.get('/', function (req, res, next) {
    model.users.findAll({})
        .then(users => res.json({
            error: false,
            data: users
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

 
 
/* POST users. */
router.post('/', function (req, res, next) {
    const {
        wechat_id,
        profile,
        name
    } = req.body;
    model.users.create({
            wechat_id: wechat_id,
            profile: profile,
            name: name
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: 'New user has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
/* update user. */
router.put('/:id', function (req, res, next) {
    const id = req.params.id;
    const { 
        profile: profile,
        name: name
    } = req.body;
    model.users.update({
            profile: profile,
            name: name
        }, {
            where: {
                id: id
            }
        })
        .then(user => res.status(201).json({
            error: false,
            message: 'user has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* DELETE user listing. */
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
    model.users.destroy({ where: {
        id: id
    }})
        .then(status => res.status(201).json({
            error: false,
            message: 'user has been delete.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;
