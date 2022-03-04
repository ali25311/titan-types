// Main code here

function restart() {
 window.location.reload();
}

//Hides and shows the dropdown content
function myDurationDropdown() {
 document.getElementById("myDurationDropdown").classList.toggle("show");
}

function myTypeDropdown() {
 document.getElementById("myTypeDropdown").classList.toggle("show");
}

// Closes dropdown if misclicked
window.onclick = function(event) {
 if (!event.target.matches('.dropbtn')) {
  var dropdown = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdown.length(); i++) {
   var openDropdown = dropdown[i];
   if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
   }
  }
 }
}

