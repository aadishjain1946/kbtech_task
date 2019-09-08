const path = require('path');
const connection = require(path.join(__dirname, '../connection'));
const schema = connection.Schema;
const catalogueSchema = new schema({
    'product': { type: String, required: true, unique: true },
    'address': { type: Array, required: true }
})
const catalogueModel = connection.model('catalogues',catalogueSchema);
module.exports = catalogueModel;