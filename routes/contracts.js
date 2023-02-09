const { Router } = require('express');
const { deployContract, deleteContract, updateContract, getContract } = require('../controllers/contracts.controller');
const { get } = require('./users');

const router = Router();
/*router.route('/')
    .get(getReports)
    .post(createReport)*/
router.route('/')
    .get(getContract)    
    .post(deployContract)
    .put(updateContract)
    .delete(deleteContract);
/*router.route('/state')
    .post(setState);*/
    
module.exports = router;