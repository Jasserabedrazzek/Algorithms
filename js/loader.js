function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async () => {
    await sleep(2000);
    document.querySelector('.content').style.display = 'flex';
    document.querySelector('.loaders').style.display = 'none';
    document.querySelector('.loaders').remove();
    var u = window.location.hash.split('#')[1];
    if (u) {
        window.location.hash = '#';
    }
}
