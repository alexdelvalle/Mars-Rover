// Iteration 1
var rover = {
  position: [0, 0],
  direction: "N",
};

// Rover functions for movement and direction (Iterations 2 and 3)
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("Rover's new position is [" + rover.position[0] + "," + rover.position[1] + "]");
  console.log("Rover is now facing " + rover.direction);
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
    }
  console.log("Rover's new position is [" + rover.position[0] + "," + rover.position[1] + "]");
  console.log("Rover is now facing " + rover.direction);
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      rover.position[0] ++;
      break;
    case "S":
      rover.position[0] --;
      break;
    case "E":
      rover.position[1] ++;
      break;
    case "W":
      rover.position[1] --;
      break;
    }
  console.log("Rover's new position is [" + rover.position[0] + "," + rover.position[1] + "]");
  console.log("Rover is now facing " + rover.direction);
}

function moveBackward(rover) {
  switch (rover.direction) {
    case "N":
      rover.position[0] --;
      break;
    case "S":
      rover.position[0] ++;
      break;
    case "E":
      rover.position[1] --;
      break;
    case "W":
      rover.position[1] ++;
      break;
    }
  console.log("Rover's new position is [" + rover.position[0] + "," + rover.position[1] + "]");
  console.log("Rover is now facing " + rover.direction);
}

// Commands (Iteration 4)

function commands() {
  var commandsArray = commands.split("");

  for (var i = 0; i < commandsArray.length; i++) {
    if (commandsArray[i] === "f") {
      moveForward(rover);
    }
    else if (commandsArray[i] === "b") {
      moveBackward(rover);
    }
    else if (commandsArray[i] === "r") {
      turnRight(rover);
    }
    else if (commandsArray[i] === "l") {
      turnLeft(rover);
    }
    else {
      console.log("Those commands are not available. Try again!");
    }
  }
}
