
//<!--FIRSTNAME-->//

document
  .querySelector("#submitBttn01")
  .addEventListener("click", FirstnamePrint);

function FirstnamePrint() {
  document.getElementById(
    "printFirstSurnameCopy"
  ).innerText = document.getElementById("inputFirstname").value;
}

//<!--SURNAME-->//

document.querySelector("#submitBttn02").addEventListener("click", SurnamePrint);

function SurnamePrint() {
  document.getElementById("printFirstSurnameCopy").innerText =
    document.getElementById("inputFirstname").value + 
    document.getElementById("inputSurname").value;
}

//<!--UNIVERSITY-->//

document
  .querySelector("#submitBttn03")
  .addEventListener("click", UniversityPrint);

function UniversityPrint() {
  document.getElementById(
    "printCopyUniversity"
  ).innerText = document.getElementById("inputUniversity").value;
}

//<!--PROGRAM-->//

document.querySelector("#submitBttn04").addEventListener("click", ProgramPrint);

function ProgramPrint() {
  document.getElementById(
    "printCopyProgram"
  ).innerText = document.getElementById("inputProgram").value;
}

//<!--DEGREE-->//

document.querySelector("#submitBttn05").addEventListener("click", DegreePrint);

function DegreePrint() {
  document.getElementById(
    "printCopyDegree"
  ).innerText = document.getElementById("inputDegree").value;
}

//MODAL BEFORE YOU PRINT//

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("before--you--print--bttn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

