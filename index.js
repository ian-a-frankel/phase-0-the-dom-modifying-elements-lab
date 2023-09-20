// Write your code here!

document.querySelector("main").remove();

const newHeader = document.createElement("h1");

newHeader.textContent = "Ian is the champion";

newHeader.id = 'victory';

document.body.append(newHeader);