let nav = document.getElementById('nav');

const scroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.backgroundImage = 'linear-gradient(90deg, #4776e6 0%, #8E54E9 100%)';
    } else {
        nav.style.backgroundImage = 'linear-gradient(90deg, transparent 0%, transparent 100%)';
    }
}

window.onscroll = scroll;
    