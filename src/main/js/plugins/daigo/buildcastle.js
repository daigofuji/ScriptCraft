var buildcastle = function(theblock) {
    var i ;
    this.chkpt('buildcastle');

    // user can specify block type for castle
    // defaults to brick
    var blockType = "45";
    if ( typeof theblock !== 'undefined' ) {
        blockType = theblock;
    }

    var block2 = "42";
    // 45 is brick
    // 41 is gold
    // 57 is diamond

    var buildtower = function(right, fwd){
        this
        .right(right)
        .fwd(fwd)
        .cylinder(block2,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder0(blocks.glass_pane,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder(block2,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder0(blocks.glass_pane,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder(block2,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder0(blocks.glass_pane,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder(block2,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder0(blocks.glass_pane,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder(block2,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder0(blocks.glass_pane,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder(block2,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder0(blocks.glass_pane,5,1)
        .up(1)
        .cylinder0(blockType,5,2)
        .up(2)
        .cylinder(blockType,5,1);
    };

    //var centerbox = box0(45,20,30,20);

    buildtower(0,0);
    buildtower(30, 0);
    buildtower(0, 30);
    buildtower(30, 30);
        
    this
        .move('buildcastle')
        .fwd(10)
        .right(10);
        //middle
    this
        //inside
        .box(block2,20,1,20)
        .up(1)
        .box0(blockType,20,4,20)
        .up(4)
        .box(block2,20,1,20)
        .up(1)
        .box0(blockType,20,4,20)
        .up(4)
        .box(block2,20,1,20)
        .up(1)
        .box0(blockType,20,4,20)
        .up(4)
        .box(block2,20,1,20)
        .up(1)
        .box0(blockType,20,4,20)
        .up(4)
        .box(block2,20,1,20)
        .up(1)
        .box0(blockType,20,4,20)
        .up(4)
        .box(blockType,20,1,20)
        .down(25);

    this
        .move('buildcastle');


    // if ( typeof floors == 'undefined' ) {
    //     floors = 10;
    // }
    // this.chkpt('buildcastle'); // saves the drone position so it can return there later
    // for ( i = 0; i < floors; i++ ) {
    //     this.box(41,20,1,20)
    //         .up()
    //         .box0(blocks.glass_pane,20,3,20)
    //         .up(3);
    // }
    return this.move('buildcastle'); // return to where we started
};
var Drone = require('../drone/drone').Drone;
Drone.extend('buildcastle',buildcastle);