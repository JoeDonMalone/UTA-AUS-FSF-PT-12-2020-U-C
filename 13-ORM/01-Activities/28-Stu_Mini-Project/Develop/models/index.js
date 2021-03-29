const Traveller = require('./traveller');
const Location = require('./location');
const Trip = require('./trips');

Traveller.belongsToMany(Location, {
    through: {
        model: Trip, 
        unique: false
    },
    as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
  foreignKey: 'traveller_id',
    through: {
        model: Trip, 
        unique: false
    },
    as: 'planned_trips'
});
// Driver.hasMany(Car, {
//   foreignKey: 'driver_id',
//   onDelete: 'CASCADE',
// });

// Car.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

module.exports = { Traveller, Location, Trip };
