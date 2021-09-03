const siege = require('siege');

siege()
  .on(8000)
  .concurrent(100)
  .for(10000).times
  .get('/')
  .attack()