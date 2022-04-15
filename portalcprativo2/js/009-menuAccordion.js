    var acc = document.getElementsByClassName("accordion");
    var iAcc;

    for (iAcc = 0; iAcc < acc.length; iAcc++) {
    acc[iAcc].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("activeAc");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }