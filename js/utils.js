function footer() {
  var i = 1;
  var j = 1;
  document.getElementById("footer_div").innerHTML =
    "<p>Copyright &copy; " + /\d{4}/.exec(Date())[0] + " Hayden Moritz</p>";
}

function toggleTheme() {
  var theme = document.getElementById("theme");
  if (document.getElementById("dn").checked) {
    theme.setAttribute("href", "css/skeleton-dark.css");
  } else {
    theme.setAttribute("href", "css/skeleton-light.css");
  }
}
