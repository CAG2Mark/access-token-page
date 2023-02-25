var tokenArea = document.getElementById("token-area");

let token = window.location.hash.split("=")[1].split("&")[0];

let button = document.getElementById("copy-button");

document.getElementById("copy-button").addEventListener("click", (e) => {
    navigator.clipboard.writeText(token);
    button.innerHTML = "Copied!";
})