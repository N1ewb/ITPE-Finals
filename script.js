function changeTheme(theme) {
    const body = document.querySelector('body');
    const white = document.querySelector('white');

    if (theme === 'dark') {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff'; 
        body.style.backgroundImage = "url('/images/109884134_p2_master1200.jpg')";
        white.style.backgroundColor = "#23252b"
        white.style.color = "#fff"
    } else if (theme === 'light') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black'; 
        body.style.backgroundImage = "url('/images/109884134_p0_master1200.jpg')";
        white.style.backgroundColor = "white"
    }
}