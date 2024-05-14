let navigatorarrowel = document.querySelector(".navigator .arrow")
let navigatorcontainer = document.querySelector(".navigator")
let lastscrollpos = 0;
scrollingdown = false;
addEventListener("scroll", (event) => {
    if (window.scrollY > lastscrollpos) {
        scrollingdown = true;
    } else {
        scrollingdown = false;
    }
    navigator();
    lastscrollpos = window.scrollY;
});

function navigator() {
    if (scrollingdown) {
        navigatorarrowel.classList.remove("arrowup")
        navigatorarrowel.classList.add("arrowdown")
        console.log("scrolling down");
    } else {
        navigatorarrowel.classList.add("arrowup")
        navigatorarrowel.classList.remove("arrowdown")
        console.log("scrolling up");
    }
    var scrollposattime = window.scrollY;
    setTimeout(() => {
        if (lastscrollpos == scrollposattime) {
            navigatorarrowel.classList.remove("arrowup")
            navigatorarrowel.classList.remove("arrowdown")
        }
    }, 300);
}

function navexpanded(state) {
    if (state) {
        
    } else {
        
    }
}

window.navigation.addEventListener("navigate", (event) => {
    console.log('location changed!');
})