const express = require('express')
const router = express.Router()

const { createTrip,
        tripDetails,
        updateDetails,
        deleteTrip
      } = require('../controllers/tripController')

router.post('/createtrip', createTrip)
router.get('/gettrip', tripDetails);
router.put('/updatetrip/:id', updateDetails);
router.delete('/deletetrip/:id', deleteTrip);

module.exports = router