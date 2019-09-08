const path = require('path');
const connection = require(path.join(__dirname, '../connection'));
const schema = connection.Schema;
const orderSchema = new schema({
    'orderid': { type: String, required: true, unique: true },
    'customerid': { type: String, required: true },
    'order': { type: String, required: true },
    'quantity': { type: Number, required: true },
    'status': { type: String, default: 'Task Created' },
    'deliveryboy': { type: String, default: "none" },
    'picuplocation': { type: String, required: true },
})
const orderModel = connection.model('orders', orderSchema);
module.exports = orderModel;
