import prompt from "./prompt.js";

const register = () => {
  let name = prompt("Name: ");
  let username = prompt("Username: ");
  let password = prompt("Password: ", { echo: " * " }).trim();
};

export default register;
