var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET products listing. */
router.get('/', function (req, res, next) {
    model.products.findAll({})
        .then(products => res.json({
            error: false,
            data: products
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

 
 
/* POST products. */
router.post('/', function (req, res, next) {
    const {
        category,
        from,
        to,
        expired_date,
        user_id,
        status,
        weight_kg
    } = req.body;
    model.products.create({
            category: category,
            from: from,
            to: to,
            user_id: user_id,
            status: 'open',
            weight_kg: weight_kg,
            expiredAt: expired_date
        })
        .then(product => res.status(201).json({
            error: false,
            data: product,
            message: 'New product has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
/* update products. */
router.put('/:id', function (req, res, next) {
 
    const id = req.params.id;
 
    const { 
        category, 
        from,
        to,
        expired_date,
        assigned_user_id,
        status,
        weight_kg
    } = req.body;
    var now = new Date();
    model.products.update({
            category: category,
            from: from,
            to: to,
            expiredAt: expired_date,
            updated_date: now,
            assigned_user_id: assigned_user_id,
            status: status,
            weight_kg: weight_kg,
            updatedAt: now
        }, {
            where: {
                id: id
            }
        })
        .then(product => res.status(201).json({
            error: false,
            message: 'product has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* DELETE products listing. */
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
 
    model.products.destroy({ where: {
        id: id
    }})
        .then(status => res.status(201).json({
            error: false,
            message: 'product has been delete.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;
