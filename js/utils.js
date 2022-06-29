function footer() {
  var i = 1;
  var j = 1;
  document.getElementById("footer_div").innerHTML =
    "<p>Copyright &copy; " + /\d{4}/.exec(Date())[0] + " Hayden Moritz</p>";
}
