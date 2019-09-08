const path = require('path');
const orderModel = require(path.join(__dirname, '../models/oders'));
const userModel = require(path.join(__dirname, '../models/usermodel'));
const catalogueModel = require(path.join(__dirname, '../models/catalogue'));
function genrandomno(min, max) {
    var random = Math.random() * (+max - +min) + +min;
    return parseInt(random);
}
const orderOperations = {
    createorder(obj, productarr, res) {
        catalogueModel.find({ 'product': productarr }, (err, docs) => {
            if (!err) {
                for (let i = 0; i < docs.length; i++) {
                    add = docs[i].address;
                    pr = docs[i].product;
                    indexarr = obj.findIndex(x => x.order === pr);
                    index = genrandomno(0, add.length);
                    address = add[index];
                    obj[indexarr].picuplocation = address;
                }
                orderModel.create(obj, (err) => {
                    if (err) {
                        // console.log(err)
                        res.status(400).send({ message: "err occured" });
                    }
                    else {
                        res.status(200).send({ message: "order placed successfully" });
                    }
                })
            }
            else {
                res.status(400).send({ message: "err occured" });
            }
        })
    },
    disporder(res) {
        orderModel.find((err, docs) => {
            if (err) {
                res.status(400).send({ message: "err occured" });
            }
            else {
                res.status(200).send({ orders: docs });
            }
        })
    },
    dispdelboys(res) {
        userModel.find({ 'category': "d" }, (err, docs) => {
            if (err) {
                res.status(400).send({ message: "err occured" });
            }
            else {
                res.status(200).send({ delivery_boys: docs });
            }
        })
    },
    assigndeliveryboy(data, res) {
        orderModel.updateOne({ orderid: data.orderid }, { $set: { deliveryboy: data.deliveryboy } }, (err, docs) => {
            if (err) {
                res.status(400).send({ message: "err occured" });
            }
            else {
                res.status(200).send({ message: "delivery boy assigned" });
            }
        })
    },
    dispdeloders(u, res) {
        orderModel.find({ 'deliveryboy': u }, (err, docs) => {
            if (err) {
                res.status(400).send({ message: "err occured" });
            }
            else {
                res.status(200).send({ delivery_boys: docs });
            }
        })
    },
    updatestatus(data, res) {
        orderModel.updateOne({ orderid: data.orderid }, { $set: { status: data.status } }, (err, docs) => {
            if (err) {
                res.status(400).send({ message: "err occured" });
            }
            else {
                res.status(200).send({ message: "delivery status updated" });
            }
        })
    }
}
module.exports = orderOperations;