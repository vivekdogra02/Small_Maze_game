"use strict";

function MazeSpace(directions) {

//Dynamically creating directions for the Maze
  var i;
  for(i=0;i<directions.length;i+=1)
  {
    this[directions[i]]=false;
  }
this.north = false;
this.south =false;
this.east =false;
this.west =false;
}

MazeSpace.prototype.setWall = function(direction)
{
  this[direction]=true;
}
