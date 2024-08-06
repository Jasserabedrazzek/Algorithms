document.getElementById('startTest').addEventListener('click', function() {
    testPing();
    testDownloadSpeed();
});

function testPing() {
    const startTime = Date.now();
    fetch('https://cors-anywhere.herokuapp.com/https://via.placeholder.com/100')
        .then(response => response.blob())
        .then(() => {
            const endTime = Date.now();
            const ping = endTime - startTime;
            document.getElementById('ping').innerText = ping;
            updatePingStatus(ping);
        })
        .catch(error => {
            console.error('Error fetching image for ping test:', error);
        });
}

function testDownloadSpeed() {
    const imageSrc = 'https://cors-anywhere.herokuapp.com/https://via.placeholder.com/100';
    const startTime = Date.now();
    let downloadSize = 0;
    
    fetch(imageSrc)
        .then(response => {
            downloadSize = parseInt(response.headers.get('Content-Length'));
            return response.blob();
        })
        .then(blob => {
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000; // Time in seconds
            const bitsLoaded = downloadSize * 8; // Size in bits
            const speedMbps = (bitsLoaded / duration / 1024 / 1024).toFixed(2); // Speed in Mbps
            document.getElementById('downloadSpeed').innerText = speedMbps;
        })
        .catch(error => {
            console.error('Error fetching image for download speed test:', error);
        });
}

function updatePingStatus(ping) {
    const statusElement = document.getElementById('pingStatus');
    if (ping < 50) {
        statusElement.innerText = '(Excellent)';
        statusElement.style.color = 'green';
    } else if (ping < 100) {
        statusElement.innerText = '(Good)';
        statusElement.style.color = 'orange';
    } else {
        statusElement.innerText = '(Poor)';
        statusElement.style.color = 'red';
    }
}