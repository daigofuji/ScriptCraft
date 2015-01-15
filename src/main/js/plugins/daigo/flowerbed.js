var Drone = require('../drone/drone').Drone;
var blocks = require('blocks');

/**
### Drone.flowerbed() method

Creates a flowerbed, using all of minecraft flowers.

#### Parameters

 * width
 * depth 

#### Example
    
    /js flowerbed(6,5)
  select a ground, it starts to construct flowerbed right above it, 
  6 blocks wide and 5 blocks deep

*/
Drone.extend('flowerbed', function(witdth, depth){

    // 38:4 Red Tulip
    // 37   Dandelion
    // 38:2 Allium
    // 38:8 Oxeye Daisy
    // 38:3 Azure Bluet
    // 38:5 Orange Tulip
    // 38:1 Blue Orchid
    // 38:6 White Tulip
    // 38   Poppy
    // 38:7 Pink Tulip

  this.up(1)
    .boxa(["38:4", "37", "38:2", "38:8", "38:3", "38:5", "38:1", "38:6", "38", "38:7"], witdth, 1, depth);

  return this;
});