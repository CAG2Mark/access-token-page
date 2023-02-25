let token = window.location.hash.split("=")[1].split("&")[0];

let button = document.getElementById("copy-button");

button.addEventListener("click", (e) => {
    navigator.clipboard.writeText(token);
    button.innerHTML = "Copied!";

    button.style.width = "120px";
})

