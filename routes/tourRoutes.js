const express = require('express');
const {
  getAlltours,
  getTour,
  updateTour,
  createTour,
  deleteTour,
  checkId,
  checkBody
} = require('../controllers/toursControllers');

const router = express.Router();

//This param middle where would only be run when there is a parameter and also only on the tour rout.
router.param('id', checkId);
router
  .route('/')
  .get(getAlltours)
  .post(checkBody, createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
