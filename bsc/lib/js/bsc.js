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

VANTA.FOG({
    el: ".custombg2",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x812200,
    midtoneColor: 0x4a0f00,
    lowlightColor: 0x1f0000,
    baseColor: 0x0
})

// VANTA.FOG({
//     el: ".custombg2",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     highlightColor: 0xff4100,
//     midtoneColor: 0xff6f44,
//     lowlightColor: 0xffc9b0,
//     baseColor: 0xffffff
// })

VANTA.CLOUDS({
    el: ".custombg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: 0x0,
    skyColor: 0x0,
    cloudColor: 0x81726f,
    cloudShadowColor: 0x0,
    sunColor: 0xff4100,
    sunGlareColor: 0xff5000,
    sunlightColor: 0xff4100
  })

// Switching BGS functions
function lightmodeVanta() {
    lightvantabg.classList.add("activecustombg")
    darkvantabg.classList.remove("activecustombg")
}

function darkmodeVanta() {
    darkvantabg.classList.add("activecustombg")
    lightvantabg.classList.remove("activecustombg")
    
}

// Vanta BG Change on Scroll
let featuresbar = document.querySelector('.switchbg');
let switchbgpos = featuresbar.getBoundingClientRect().top;
let passedfbar = false;
console.log(switchbgpos);

function pageScrolled() {
    let scrollpos = window.scrollY;
    console.log(scrollpos);
    if (scrollpos > switchbgpos) {
        lightmodeVanta();
    } else if (scrollpos <= switchbgpos) {
        darkmodeVanta();
    }
}

pageScrolled()