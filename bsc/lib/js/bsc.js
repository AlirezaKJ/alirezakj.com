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

VANTA.CLOUDS({
    el: ".custombg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: 0x0,
    skyColor: 0x0,
    cloudColor: 0x727272,
    cloudShadowColor: 0x272727
})