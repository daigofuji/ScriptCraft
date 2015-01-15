var Drone = require('../drone/drone').Drone;


/**
### Drone.enchant_table() method

constructs an enchantment table surrounded with books for max enchanting

#### Parameters

 * none

#### Example
    
  /js enchant_table()
  select a ground, it starts to construct it right above it.

*/

Drone.extend('enchant_table', function () {
 this.up(); //set to just above floor level.
 this.box0(blocks.bookshelf, 5, 5, 4);
 this.chkpt('enchant_table');
 //open side
 this.up().right();
 this.box0(0, 3, 3, 1);
 //add enchantment table
 this.move('enchant_table');
 this.up().fwd().right(2);
 this.box(blocks.table_enchantment);
 //add floor
 this.move('enchant_table');
 this.box(blocks.bookshelf, 5, 1, 4);
 //add roof
 this.up(4);
 this.box(blocks.bookshelf, 5, 1, 4);

  return this;
});