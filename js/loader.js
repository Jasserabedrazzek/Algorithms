function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async () => {
    await sleep(2000);
    document.querySelector('.content').style.display = 'flex';
    document.querySelector('.loaders').style.display = 'none';
}
