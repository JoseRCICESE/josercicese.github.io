const { Router } = require('express');
const {createPatientData, deletePatientData} = require('../controllers/patientData.controller');

const router = Router();
router.route('/')
    .post(createPatientData)
router.route('/:id')
    .post(deletePatientData)

module.exports = router;
