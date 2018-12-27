let nav = document.getElementById('nav');

const scroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.backgroundColor = '#4776e6';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.color = '#ffffff';
    }
}

window.onscroll = scroll;
    

//nav.style.backgroundColor = '#ffffff';