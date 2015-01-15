/**
### Drone.steps() method

Creates a staircase

#### Parameters

 * step - number of blocks for staps, default = 6

#### Example
    
    /js steps(5)

*/

var steps = function(step) {
	// is there number of step specified? Make it 6 by default
	var s = "6";
    if ( typeof step !== 'undefined' ) {
        s = step;
    }

	for (i=0; i < s; i++) {
		this.box(156)
			.up(1)
			.fwd(1);
	}

};
var Drone = require('../drone/drone').Drone;
Drone.extend('steps',steps);