const nav = document.getElementById('nav');
const ctaBtn = document.getElementById('cta-nav-button');

const scroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.backgroundImage = 'linear-gradient(90deg, #4776e6 0%, #8E54E9 100%)';
        ctaBtn.style.border = '2px solid #ffffff';
    } else {
        nav.style.backgroundImage = 'linear-gradient(90deg, transparent 0%, transparent 100%)';
        ctaBtn.style.border = '2px solid #4776e6';
    }
}

if (window.innerWidth > 600) {
    window.onscroll = scroll;
}


if (window.innerWidth < 600) {
    const menu = document.createElement('div');
    const text = document.createTextNode('MENU');
   menu.appendChild(text);

    document.getElementById('container').appendChild(menu);
    
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.right = '0';
    menu.style.background = 'rgba(0, 0, 0, 0.63)';
    menu.style.color = '#ffffff';
    menu.style.padding = '1rem';
    menu.style.zIndex = '5555';
    nav.style.opacity = '0';
    
    function toggleNav() {
        if (nav.style.opacity === '0') {
            nav.style.opacity = '1';
        } else
            nav.style.opacity = '0';
    }
    menu.addEventListener('click', toggleNav);
   
    const link = document.getElementsByClassName('nav-link');
    
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', () => {
            nav.style.opacity = '0';
            });
    }
}
    
