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

window.onscroll = scroll;
    