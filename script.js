function goToProjects() {
  alert("Projects section coming soon!");
  // window.location.href = "#projects";
}

function openProject(title, description, image) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalImage").src = image;
  document.getElementById("projectModal").style.display = "block";
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
}

(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // 🔑 public key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",   // 🔑 service ID
    "YOUR_TEMPLATE_ID",  // 🔑 template ID
    this
  )
  .then(function () {
    document.getElementById("status").innerText =
      "Message sent successfully!";
    document.getElementById("contact-form").reset();
  }, function (error) {
    document.getElementById("status").innerText =
      "Failed to send message.";
    console.log(error);
  });
});
