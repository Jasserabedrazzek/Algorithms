const scrollPositionElement = document.querySelector('.content');
const scroll_bar = document.querySelector('.connection-bar');
let lastScrollTop = 0;

function updateScrollPosition() {
    const scrollTop = scrollPositionElement.scrollTop;
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    calculate_scroll_position(lastScrollTop, scrollPositionElement.scrollHeight - scrollPositionElement.clientHeight);
}

function calculate_scroll_position(n, m) {
    var percentage = n / m;
    
    var scroll_percentage = percentage.toFixed(2) * 100;
    if (scroll_percentage > 100) {
        scroll_percentage = 100;
    }
    scroll_bar.style.width = `${scroll_percentage}%`;
}

scrollPositionElement.addEventListener('scroll', updateScrollPosition);
