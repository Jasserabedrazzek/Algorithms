function get_url() {
    var url = window.location.href
    var path_params = new URL(url).pathname.split('/');
    if (path_params[1] === 'Algorithms') {
        document.querySelector('.algo-links').style.color='red';
    }
    else if (path_params[1] === 'home') {
        document.querySelector('.home-links').style.color='red';
    }
    else if (path_params[1] === 'exercices') {
        document.querySelector('.exercices-links').style.color='red';
    }
}

get_url()