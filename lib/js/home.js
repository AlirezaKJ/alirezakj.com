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

function darkmodeVanta() {
    VANTA.WAVES({
        el: ".nav-and-header",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0,
        shininess: 50.00,
        waveHeight: 40.00,
        zoom: 1.00
    })
}

function lightmodeVanta() {
    VANTA.WAVES({
        el: ".nav-and-header",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x909090,
        shininess: 50.00,
        waveHeight: 20.00,
        zoom: 1.00
    })
}

darkmodeVanta()