// Smooth collapse/expand animation
document.addEventListener("DOMContentLoaded", function () {
    const collapseElements = document.querySelectorAll(".collapse");

    collapseElements.forEach((collapseElement) => {
        // Set initial height to 0 for collapsed elements
        if (!collapseElement.classList.contains("show")) {
            collapseElement.style.height = "0";
        }

        // Add event listeners for show/hide events
        collapseElement.addEventListener("show.bs.collapse", function () {
            // Set height to the scroll height of the content
            collapseElement.style.height = collapseElement.scrollHeight + "px";
        });

        collapseElement.addEventListener("shown.bs.collapse", function () {
            // Set height to auto after the transition completes
            collapseElement.style.height = "auto";
        });

        collapseElement.addEventListener("hide.bs.collapse", function () {
            // Set height to the current scroll height before collapsing
            collapseElement.style.height = collapseElement.scrollHeight + "px";
            // Force reflow to trigger the transition
            void collapseElement.offsetHeight;
            // Set height to 0 to collapse
            collapseElement.style.height = "0";
        });
    });
});