const express = require('express');
const adminRoutes = express.Router();
adminRoutes.post('/orders', (req, res) => {
    const orderop = require('../db/helpers/ordercrud');
    orderop.disporder(res);
})
adminRoutes.post('/deliveryboys', (req, res) => {
    const orderop = require('../db/helpers/ordercrud');
    orderop.dispdelboys(res);
})
adminRoutes.post('/assigndeliveryboy', (req, res) => {
    data = req.body;
    const orderop = require('../db/helpers/ordercrud');
    orderop.assigndeliveryboy(data,res);
})
module.exports = adminRoutes;