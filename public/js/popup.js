var modal = document.getElementById("myModal");
var btn = document.getElementById("details");
var span = document.getElementsByClassName("close")[0];
function popup()
{
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}