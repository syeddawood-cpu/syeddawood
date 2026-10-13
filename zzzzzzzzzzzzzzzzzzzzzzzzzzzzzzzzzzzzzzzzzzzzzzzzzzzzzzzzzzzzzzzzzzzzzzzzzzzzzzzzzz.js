const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");
filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    filter.classList.add("active");
    const type = filter.dataset.filter;
    projects.forEach(project => {
      project.style.display = type === "all" || project.dataset.type === type ? "" : "none";
    });
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
