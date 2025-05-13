import { create_html_element,add_to_DOM,create_css } from '/lib/create_page.js';




create_css(
    {
        selector: '.card',
        css: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '750px',
            maxWidth:'90%',
            height: '90%',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgb(0,0,0)',
            zIndex: '1000',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            display:"none"
        }
    }
)



create_css({
    selector: '.card-header-content',
    css: {
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '1rem',
        overflowX: 'hidden',
    }
})

create_css({
    selector: '.card-hide',
    css: {
        color:'red',
        cursor: 'pointer',
        fontSize: '1.5rem',
        marginLeft: '1rem',
        transition: 'all 0.3s ease-in-out',
        background: 'transparent',
        border: 'none',
        outline: 'none',
    }
})
create_css({
    selector: '.card-hide:active',
    css: {
        color:'red',
        scale: '.9'
    }
});
create_css({
    selector: '.card-hide:hover',
    css: {
        color:'rgb(255, 80, 80)',
    }
})
create_css({
    selector: '.card-title,.icon',
    css: {
        fontFamily:'"Noto Sans", sans-serif',
        fontWeight: 'bold',
        margin: '0',
        color:"blue"
    }
})

const card_content = create_html_element({
    tag: 'iframe',
    attributes: {
        class: 'card-content',
        src:'',
        frameborder:"0",
    }
})



create_css(
    {
        selector: '.card-content',
        css: {
            overflowY: 'auto',
            height: '100%',
        }
    }
)
const link_icon = create_html_element({
    tag: 'i',
    attributes: {
        class: ''
    },
    children : 'Voir Plus'
});
const link_text = create_html_element({
    tag: 'a',
    attributes: {
        href: '#',
        class: 'link-page'
    },
    children: link_icon ,
});
const card_footer = create_html_element({
    tag: 'div',
    attributes: {
        class: 'card-footer'
    },
    children: link_text
})


create_css(
    {
        selector: '.card-footer',
        css: {
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            padding: '1rem',
            overflowX: 'hidden',
            overflowY: 'hidden',
            gap:'10px',
        }
    }
)
create_css({
    selector: '.card-footer a',
    css: {
        color: 'blue',
        textDecoration: 'none',
        fontSize: '1.2rem',
        marginLeft: '1rem',
        transition: 'all 0.3s ease-in-out',
        background: 'transparent',
        border: '1px solid blue',
        outline: 'none',
        padding: '0.5rem',
        cursor: 'pointer',
        borderRadius: '5px',

    }
})

