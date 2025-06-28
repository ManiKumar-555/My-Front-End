// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeButton");
    const title = document.getElementById("title");

    button.addEventListener("click", function() {
        title.textContent = "You clicked the button!";
        title.style.color = "green";
    });
});
