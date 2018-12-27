let nav = document.getElementById('nav');

const scroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.backgroundColor = '#4776e6';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.color = '#ffffff';
    }
}

window.onscroll = scroll;
    