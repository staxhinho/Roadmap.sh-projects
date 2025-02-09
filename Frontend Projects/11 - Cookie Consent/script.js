console.log("I loaded");

let close = document.getElementById("ximg");
let cookiecontainer = document.getElementById("cookie");
let yesbtn = document.getElementById("yescookies");

yesbtn.onclick = () => {
    document.cookie = "username=John Doe";
    if(document.cookie) {
        cookiecontainer.style.display = "none";
    }
}

function closefun () {
    alert("Cookies rejected. Some functionality may be limited.");
    cookiecontainer.style.display = "none";
}

let checkCookie = document.cookie.indexOf("username=John Doe");

checkCookie !== -1? cookiecontainer.style.display = "none" : cookiecontainer.style.display = "flex";