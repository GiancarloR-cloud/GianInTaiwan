document.addEventListener("DOMContentLoaded", function() {
    fetch("report_content.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("report-content").innerHTML = data;
        })
        .catch(error => console.error("Error loading report content:", error));
});
