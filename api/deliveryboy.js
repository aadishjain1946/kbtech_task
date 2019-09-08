const express = require('express');
const deliveryRoutes = express.Router();
const path = require('path');
const jwt = require(path.join(__dirname, '../utils/jwt'));
deliveryRoutes.post('/orders', (req, res) => {
    var token = req.headers['x-csrf-token'];
    userId = jwt.verifyToken(token);
    const orderop = require('../db/helpers/ordercrud');
    orderop.dispdeloders(userId, res)
})
deliveryRoutes.post('/updatestatus', (req, res) => {
    data = req.body;
    const orderop = require('../db/helpers/ordercrud');
    orderop.updatestatus(data, res)
})
module.exports = deliveryRoutes;