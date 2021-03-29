const router = require('express').Router();
const sequelize = require('../../config/connection');
const traveller = require('../../models').traveller;

router.get('/', async (req, res) => {
    try {
      const driverData = await Driver.findAll({
        include: [{ model: License }, { model: Car }],
        attributes: {
          include: [
            [
              // Use plain SQL to add up the total mileage
              sequelize.literal(
                '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'
              ),
              'totalMileage',
            ],
          ],
        },
      });
      res.status(200).json(driverData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = traveller;