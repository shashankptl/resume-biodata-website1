$(function () {
  // Mobile navigation menu using jQuery
  $(".menu-toggle").on("click", function () {
    $(".nav-links").toggleClass("open");
    const expanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", String(!expanded));
  });

  // Automatically update the copyright year
  $("#year").text(new Date().getFullYear());

  // Client-side contact form validation using jQuery and JavaScript
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const output = $("#formMessage");

    if (!name || !email || !message) {
      output.removeClass("success").addClass("error").text("Please fill in all fields.");
      return;
    }
    if (!emailPattern.test(email)) {
      output.removeClass("success").addClass("error").text("Please enter a valid email address.");
      return;
    }
    output.removeClass("error").addClass("success").text("Form validated successfully! (Demo only — no message was sent.)");
    this.reset();
  });
});
