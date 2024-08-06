function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async () => {
    await sleep(5000);
    window.location.href = '/home';
}
