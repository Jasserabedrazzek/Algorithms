const list_links = [
    'algo-links',
    'exercices-links',
    'home-links'
]
const list_urls = [
    'home',
    'Algorithms'
]

function get_url(params_) {
    var url = window.location.href
    path_params = new URL(url).pathname.split('/')
    
    if (path_params[1] === 'Algorithms') {
        document.querySelector('.algo-links').style.color='red'
        document.querySelector('.algo-links-menu').style.color='red'
    }
    else if (path_params[1] === 'home') {
        document.querySelector('.home-links').style.color='red'
        document.querySelector('.home-links-menu').style.color='red'
    }
    else if (path_params[1] === 'exercices') {
        document.querySelector('.exercices-links').style.color='red'
        document.querySelector('.exercices-links-menu').style.color='red'
    }
}

get_url('params_')