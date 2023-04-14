const express = require('express')
const router = express.Router();

const product_data = require('./controller');

router.get('/',product_data.product_All);
router.get('/:product_id',product_data.product_details);
router.post('/',product_data.product_create);
router.put('/:product_id',product_data.product_update);
router.delete('/:product_id',product_data.product_delete)


 module.exports = router;