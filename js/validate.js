//validate zip
export function isValidZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}
//Display alert Message
export function showAlert(message, className) {
  //create div
  const div = document.createElement("div");
  //add Classes
  div.className = `alert alert-${className}`;
  //add Text
  div.appendChild(document.createTextNode(message));
  //get Container
  const container = document.querySelector(".container");
  //get Form
  const form = document.querySelector("#pet-form");
  //insert alert
  container.insertBefore(div, form);
  //set Timeout of 3s
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}
