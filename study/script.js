document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropbtn");

    dropdowns.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.parentElement.classList.toggle("open");
        });
    });
});
