document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            console.log("You clicked on " + this.innerText);
        });
    });
});