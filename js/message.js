import { create_html_element,add_to_DOM,create_css } from 'https://create-page-with-js.netlify.app/create-page.js';

const success_message = create_html_element(
    {
        tag: 'div',
        attributes: {
            'class':'message-box',
            'id':'message-box'
        },
        children: ''
    }
    
)

add_to_DOM({
    parent: 'body',
    element: success_message
});



const error_message = create_html_element(
    {
        tag: 'div',
        attributes: {
            'class':'message-box',
            'id':'err-message-box'
        },
        children: ''
    }
    
)

add_to_DOM({
    parent: 'body',
    element: error_message
});



const info_message = create_html_element(
    {
        tag: 'div',
        attributes: {
            'class':'message-box',
            'id':'info-message-box'
        },
        children: ''
    }
    
)

add_to_DOM({
    parent: 'body',
    element: info_message
});


create_css(
    {
        'selector': '#message-box',
        'css': {
            background: 'rgb(2, 119, 15)',
            
        }
    }
)
create_css(
    {
        'selector': '#err-message-box',
        'css': {
            background: 'rgb(119, 2, 2)',
        }
    }
)
create_css(
    {
        'selector': '#info-message-box',
        'css': {
            background: 'rgb(2, 29, 119)',
            
        }
    }
)

create_css(
    {
        'selector': '.message-box',
        'css': {
            position: 'fixed',
            bottom: '-500px',
            right: '25px',
            width: 'max-content',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            fontSize: '18px',
            textAlign: 'center',
            transition: 'bottom 1s ease-in-out'
        }
    }
)

create_css({
    selector: '.show',
    css: {
        bottom: '50px'
    }
})

