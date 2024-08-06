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
    var url_params = url.split('http://')[1] 
    var path_params = url_params.split('/')[1]
    if (path_params === 'Algorithms') {
        document.querySelector('.algo-links').style.color='red'
        document.querySelector('.algo-links-menu').style.color='red'
    }
    else if (path_params === 'home') {
        document.querySelector('.home-links').style.color='red'
        document.querySelector('.home-links-menu').style.color='red'
    }
    else if (path_params === 'exercices') {
        document.querySelector('.exercices-links').style.color='red'
        document.querySelector('.exercices-links-menu').style.color='red'
        console.log(window.location.hash)
    }
}

get_url('params_')