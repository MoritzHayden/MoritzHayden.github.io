function render() {
  bio();
  footer();
  contact();

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
    "<p>Copyright &copy; " +
    /\d{4}/.exec(Date())[0] +
    ' Hayden Moritz<br/ ><a href="https://test.hmoritz.dev/">Redesign Sneak Peek</a></p>';
}

function contact() {
  var width = window.innerWidth;
  if (width < 400) {
    document.getElementById("email_btn").innerHTML =
      '<img class="icon" src="images/icons/email.svg" alt="Email Icon"/>Email Me';
    document.getElementById("call_btn").innerHTML =
      '<img class="icon" src="images/icons/phone.svg" alt="Phone Icon"/>Call Me';
  } else {
    document.getElementById("email_btn").innerHTML =
      '<img class="icon" src="images/icons/email.svg" alt="Email Icon"/>Email Me';
    document.getElementById("call_btn").innerHTML =
      '<img class="icon" src="images/icons/phone.svg" alt="Phone Icon"/>Call Me';
  }
}

function toggleTheme() {
  var theme = document.getElementById("theme");
  if (document.getElementById("dn").checked) {
    theme.setAttribute("href", "css/skeleton-dark.css");
  } else {
    theme.setAttribute("href", "css/skeleton-light.css");
  }
}
