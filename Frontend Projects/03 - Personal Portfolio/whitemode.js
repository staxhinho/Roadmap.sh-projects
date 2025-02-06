// Retrieve the stored mode on page load
let whitemode = localStorage.getItem("whitemode");
const themeSwitch = document.getElementById("theme-switch");

const enableWhitemode = () => {
    document.body.classList.add("whitemode");
    localStorage.setItem("whitemode", "active");
};

const disableWhitemode = () => {
    document.body.classList.remove("whitemode");
    localStorage.removeItem("whitemode");
};

if (whitemode === "active") {
    enableWhitemode();
}

themeSwitch.addEventListener("click", () => {
    whitemode = localStorage.getItem("whitemode");
    if (whitemode !== "active") {
        enableWhitemode();
    } else {
        disableWhitemode();
    }
});