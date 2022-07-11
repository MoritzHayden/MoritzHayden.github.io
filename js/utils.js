function render() {
  bio();
  footer();

  window.addEventListener("resize", render, true);
}

function bio() {
  var width = window.innerWidth;
  var bio =
    "<p><span>👨‍💻 Software Engineering | </span><span>🔐 Cybersecurity | </span><span>🔨 Hackathons</span></p>";

  if (width < 650) {
    bio =
      "<p><span>👨‍💻 Software Engineering</span><br><span>🔐 Cybersecurity</span><br><span>🔨 Hackathons</span></p>";
  }

  document.getElementById("bio_div").innerHTML = bio;
}

function footer() {
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
