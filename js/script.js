const d = new Date();
const last_updated = document.querySelector(".last_updated");
const current_year = document.querySelector(".current_year");
last_updated.textContent = document.lastModified;
current_year.textContent = d.getFullYear();