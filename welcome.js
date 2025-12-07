import prompt from "./prompt.js";
import logIn from "./logIn.js";

let running = true;
// Menu Function
const consoleMenu = () => {
  console.log("=".repeat(20));
  console.log("ENTERPRISE RESOURCE & WORKFORCE MANAGEMENT SYSTEM");
  console.log("=".repeat(20));
  console.log("1 - Log In");
  console.log("2 - Register");
  console.log("3 - Exit");
};

// Get User Input
const getMenuInput = () => {
  return prompt("> ");
};

// Handle User Input
const HandleMenuInput = (pick) => {
  switch (pick) {
    case "1":
      logIn();
      break;
    case "2":
      console.log("Register");
      // Add registration logic here
      break;
    case "3":
      console.log("Exit");
      return false;
      break;
    default:
      console.log("Invalid Input");
  }
  return running;
};

while (running) {
  consoleMenu();
  const pick = getMenuInput();
  running = HandleMenuInput(pick);
}
