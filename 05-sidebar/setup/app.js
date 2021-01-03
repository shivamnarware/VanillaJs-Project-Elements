let tooglebtn = document.querySelector(".sidebar-toggle");
let closebtn = document.querySelector(".close-btn");
let sidebar = document.querySelector(".sidebar");

tooglebtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

closebtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});