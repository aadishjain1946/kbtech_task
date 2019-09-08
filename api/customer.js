const express = require('express');
const path = require('path');
const jwt = require(path.join(__dirname, '../utils/jwt'));
const customerRoutes = express.Router();
function genrandomno() {
    var min = 0;
    var max = 100000000000;
    var random = Math.random() * (+max - +min) + +min;
    return parseInt(random);
}

customerRoutes.post('/order', (req, res) => {
    data = req.body;
    var token = req.headers['x-csrf-token'];
    userId = jwt.verifyToken(token);
    data = data.order;
    var arr = [];
    var productarr = [];
    for (i in data) {
        obj = {};
        obj.orderid = genrandomno();
        obj.order = (data[i].item).toLowerCase();
        productarr.push((data[i].item).toLowerCase())
        obj.quantity = data[i].quantity;
        obj.customerid = userId;
        arr.push(obj);
    }
    const orderop = require('../db/helpers/ordercrud');
    orderop.createorder(arr,productarr, res);
})

module.exports = customerRoutes;