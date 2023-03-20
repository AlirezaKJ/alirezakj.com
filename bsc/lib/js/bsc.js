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
    VANTA.FOG({
        el: ".nav-and-header",
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
}

function lightmodeVanta() {
    VANTA.FOG({
        el: ".nav-and-header",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xff4100,
        midtoneColor: 0xff6f44,
        lowlightColor: 0xffc9b0,
        baseColor: 0xffffff
    })
}

darkmodeVanta()