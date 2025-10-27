// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Handle recommendation form
document.getElementById("recommendForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("recName").value.trim();
  const message = document.getElementById("recMessage").value.trim();

  if (name && message) {
    const newRec = document.createElement("div");
    newRec.classList.add("recommend-card");
    newRec.innerHTML = `<p>"${message}"</p><h4>- ${name}</h4>`;

    document.querySelector(".recommend-grid").appendChild(newRec);
    e.target.reset();

    // Show popup confirmation
    const popup = document.getElementById("popupMessage");
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 3000);
  }
});
