let headericons = document.querySelectorAll('header .icon');

function headericonsHover(index) {
    if (index == -1) {
        headericons.forEach(icon => {    
            icon.classList.remove('someonehovered');
            icon.classList.remove('hovered');
        });
    } else {
        icon = headericons[index]
        headericons.forEach(icon => {
            icon.classList.add('someonehovered')
        });
        icon.classList.remove('someonehovered');
        icon.classList.add('hovered');
    }
}

// Init Vanta BGS
let darkvantabg = document.querySelector('.custombg');
let lightvantabg = document.querySelector('.custombg2');

VANTA.CELLS({
    el: ".custombg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    color1: 0xff3800,
    color2: 0x545353
})

VANTA.NET({
    el: ".custombg2",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 1080.00,
    minWidth: 1920.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xff7d00,
    backgroundColor: 0x0
})

// Vanta BG Change on Scroll
let featuresbar = document.querySelector('.switchbg').getBoundingClientRect();
let switchbgpos = featuresbar.top;

function pageScrolled() {
    let scrollpos = window.scrollY;
    if (scrollpos < switchbgpos) {
        darkvantabg.classList.add("activecustombg")
        lightvantabg.classList.remove("activecustombg")
    } else if (scrollpos > switchbgpos) {
        lightvantabg.classList.add("activecustombg")
        darkvantabg.classList.remove("activecustombg")
    }
}

pageScrolled()