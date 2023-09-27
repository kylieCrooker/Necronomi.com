function accordionMenu() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                panel.style.maxHeight = null;
            } else {
                panel.style.display = "block";
                panel.style.maxHeight = panel.scrollHeight + "vw";
            }
        });
    }
}

function fixSize() {
    var panel = document.getElementsByClassName("panel");

    for (let i = 0; i < panel.length; i++) {
        panel[i].style.maxHeight = panel.scrollHeight + "vw";
    }
}