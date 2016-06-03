"use strict";

function Maze(width,height){
  this.width=width;
  this.height=height;
  this.directions =["north","south","east","west"];
  this.startX=null;
  this.startY=null;
  this.startOrientation=null;
  this.endX=null;
  this.endY=null;

  this.spaces = [];

  var x,y;

  for(x=1;x<=width;x+=1)
  {
    this.spaces[x]= [];
    for(y=1;y<=height;y+=1)
    {
      this.spaces[x][y]= new MazeSpace(this.directions);
    }
  }
}
//Entry point for the robot in the MAZE
Maze.prototype.setStart = function(x,y,orientation)
{
  if (this.isInBounds(x,y) && this.isValidDate(orientation)) {
  this.startX = x ;
  this.startY = y;
  this.startOrientation = orientation;
  return true;
}
return false;
}

//Exit point for the robot in the Maze
Maze.prototype.setEnd = function(x,y)
{
  if(!this.isInBounds(x,y))
  {
    return false;
  }
  this.endX = x;
  this.endY = y;
  return true;
}

Maze.prototype.setWall = function(x,y,direction)
{
  var dir=["north","south","east","west"];
  if( this.isInBounds(x,y) && this.isValidDate(direction))
{  this.spaces[x][y].setWall(direction);
  return true;
}
return false;
}

Maze.prototype.isValidDate = function(direction)
{
  return this.directions.indexOf(direction)!== -1;
}

Maze.prototype.isInBounds = function(x,y)
{
  return x>0 && x<=this.width && y>0 && y<=this.height;
}

Maze.prototype.canMove = function (x,y,direction) {

    if(!this.isValidDate)
    {
      return false;
    }
    if(!this.isInBounds(x,y))
    {
      return false;
    }
    var forwardX,forwardY;
    switch (direction) {
      case "north":
        forwardX = x;
        forwardY = y+1;
        break;
      case "east":
          forwardX = x + 1;
          forwardY = y;
          break;
      case "south":
          forwardX = x;
          forwardY = y-1;
          break;
      case "west":
          forwardX = x -1 ;
          forwardY = y;
          break;
    }

    if(!this.isInBounds(forwardX,forwardY))
    {
      return false;
    }

    if(this.spaces[x][y][direction])
    {
      return false;
    }

    var opposites ={
      north:"south",
      east :"west",
      west :"east",
      south : "north"
    }

    if(this.spaces[forwardX][forwardY][opposites[direction]])
    {
      return false;
    }
    return true;
};
