navitems = document.querySelectorAll("nav .item")

setTimeout(() => {
    navitems.forEach(element => {
        element.classList.remove("toggled")
    });    
}, 1500);

function navClick(index,url) {
    navbtn = navitems[index]
    navbtn.classList.add("toggled")
    xilidirect(url)
}

function xilidirect(url) {
    setTimeout(() => {
        window.location.href = url
    }, 500);
}