import CreateMessage from "./message.js";
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function get_id_from_url() {
    var url = new URLSearchParams(window.location.search);
    var element_id = url.get('el_id');
    var page = url.get('p');
    return [element_id, page];
}

var sentence = ['from', 'import', 'as', 'with', 'def', 'and', 'or', 'if', 'for', 'range', 'in', 'return', 'else', 'elif', 'print', '=', '//' ,'%', '/', '*', '+', '-', 'not', 'while', 'ord', 'chr', 'input', 'int', 'float', 'len','=='];
var logic = ['True', 'False'];

function Paragraphs(text) {
    const cleanedText = text.replace(/ {2,}/g, ' ');
    const parts = cleanedText.split(/\n/);
    const paragraphs = parts.map(part => {
        const tabbedPart = part.replace(/\t/g, '<span class="tab"></span>');
        return `<p>${tabbedPart.trim()}</p>`;
    }).join('');
    return paragraphs;
}

function Text_(t) {
    var t_x_t = (t.split("'")[1]);
    return [t_x_t, true];
}

function python_sentexe(list_, text) {
    let words = text.split('\n');
    let updatedText = '';
    var _xt_ = Text_(text);
    for (let i = 0; i < words.length; i++) {
        let spaces = words[i].split(' ');
        let updatedLine = '';

        for (let j = 0; j < spaces.length; j++) {
            if (logic.includes(spaces[j])) {
                updatedLine += `<span style="color: rgb(38, 0, 255);" class="sentenxe-py">${spaces[j]}</span> `;
            } else if (list_.includes(spaces[j])) {
                updatedLine += `<span style="color: red;" class="sentenxe-py">${spaces[j]}</span> `;
            } else if (spaces[j].startsWith('#')) {
                updatedLine += `<span style="color: yellow;" class="sentenxe-py">${spaces[j]}</span> `;
            } else if (_xt_[1]) {
                updatedLine += `<span style="color: #6359f8;" class="sentenxe-py">${spaces[j]}</span> `;
            } else {
                updatedLine += spaces[j] + ' ';
            }
        }

        updatedText += updatedLine.trim() + '\n';
    }

    return updatedText.trim();
}

function get_data_from_json() {
    fetch('/json/algorithms.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('JSON response is not valid');
        }
        return response.json();
    })
    .then(data => {
        var element_data = data.find(item => item.id === get_id_from_url()[0]);
        const elementBox = document.querySelector('.element-box');
        if (!elementBox) {
            console.error('Element box not found');
            CreateMessage("error","'Element'","'Element box not found'");
            return;
        }
        CreateMessage("normal",element_data.title,element_data.description)
        elementBox.innerHTML = '';
        if (element_data && element_data.id === '4363026331' && window.location.pathname === '/Algorithms/AlgoPy/') {
            let page_num = [];
            const page = get_id_from_url()[1];
            if (page === '1') {
                page_num.push(element_data.video_title_1, element_data.video_embed_1);
            } else if (page === '2') {
                page_num.push(element_data.video_title_2, element_data.video_embed_2);
            } else if (page === '3') {
                page_num.push(element_data.video_title_3, element_data.video_embed_3);
            } else if (page === '4') {
                page_num.push(element_data.video_title_4, element_data.video_embed_4);
            } else if (page === undefined) {
                // 
            }
            if (page_num.length !== 0) {
                elementBox.innerHTML = `
                <div class="share-container">
                <button class="copy button-copy">
                <span
                    class="tooltip"
                    data-text-initial="Copy Link"
                    data-text-end="Copied!"
                ></span>
                <span>
                    <svg
                    class="clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 6.35 6.35"
                    style="enable-background:new 0 0 512 512"
                    xml:space="preserve"
                    >
                    <g>
                        <path
                        d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        fill="currentColor"
                        ></path>
                    </g>
                    </svg>
                    <svg
                    class="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    style="enable-background:new 0 0 512 512"
                    xml:space="preserve"
                    >
                    <g>
                        <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        fill="currentColor"
                        data-original="#000000"
                        ></path>
                    </g>
                    </svg>
                </span>
                </button>
                </div>
                <h1 class="title-el"></h1>
                <div class="video-container">
                    <p class="description">${page_num[0]}</p>
                    ${page_num[1]}
                    
                    <a href="${element_data.channel_id}" target="_blank">
                        <p class="channel-container description" style="border:1px solid white;border-radius:10px;box-shadow:0 0 15px;display:flex;align-items:center;gap:15px;color : white;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-weight:600 ">
                            <img src="${element_data.channel_img}" width="40px" height="40px" style="border-radius:50%;" alt="">
                            ${element_data.channel_name}
                        </p>
                    </a>
                </div>
                
                <p class="btns"><button onclick="prev_page()" class="btn prev"><i class="fa-solid fa-arrow-left"></i></button><button class="btn next" onclick="next_page()"><i class="fa-solid fa-arrow-right"></i></button></p>
                `;
            } else {
                elementBox.innerHTML = '<span style="color: red;font-size:18px" class="sentenxe-py"> No matching data found for the given ID.</span>';
            }
        }

        if (element_data) {
            if (element_data.image_uploader) {
                element_data.image_uploader = element_data.image_uploader.replace(/\\/g, '/');
            }
            if (element_data.image_uploader_py) {
                element_data.image_uploader_py = element_data.image_uploader_py.replace(/\\/g, '/');
            }
            if (element_data.image_uploader_res) {
                element_data.image_uploader_res = element_data.image_uploader_res.replace(/\\/g, '/');
            }
            var algorithm_page = `
                ${window.location.pathname === '/Algorithms/AlgoPy/' ? `
                <div class="share-container"> 
                    <button class="copy button-copy" >
                        <span class="tooltip" data-text-initial="Copy Link" data-text-end="Copied!"></span>
                        <span>
                            <svg class="clipboard" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 6.35 6.35">
                                <g><path d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z" fill="currentColor"></path></g>
                            </svg>
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <g><path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" fill="currentColor"></path></g>
                            </svg>
                        </span>
                    </button>
                </div>
                ` : ''}
                <h1 class="title-el">${element_data.title}</h1>
                <p class="description">${Paragraphs(element_data.description)}</p>
                <table class="table-el-al-py">
                    <tr class="table-title">
                        <th class="algo-py-title">Algorithme</th>
                        <th class="algo-py-title">Python</th>
                    </tr>
                    <tr class="table-algo-py">
                        <td class="table-algorithm">${Paragraphs(element_data.algo)}</td>
                        <td class="table-python">${Paragraphs(element_data.py_el)}</td>
                    </tr>
                </table>
                <div class="examples">
                    <h2 class="examples-title">Exemples</h2>
                    <div class="editor python-code">
                        <div class="code-title">
                            Python 
                            
                        </div>
                        <pre class="code code-py">${Paragraphs(python_sentexe(sentence, element_data.code_python))}</pre>
                    </div>
                    <a href="/elena.editor/?c=${element_data.id}" type="button" class="btn btn-success">Tester le code </a>
                    
                    <div class="editor algo-code">
                        <div class="code-title">Algorithme </div>
                        <pre class="code code-al">${Paragraphs(element_data.code_algo)}</pre>
                    </div>
                </div>
                <div class="images">
                    <img onclick="ShowDivImg('${"/" + element_data.image_uploader}')" src="${"/" + element_data.image_uploader}" alt="" class="img img-1">
                    <img onclick="ShowDivImg('${"/" + element_data.image_uploader_py}')" src="${"/" + element_data.image_uploader_py}" alt="" class="img img-2">
                    <img onclick="ShowDivImg('${"/" + element_data.image_uploader_res}')" src="${"/" + element_data.image_uploader_res}" alt="" class="img img-3">
                </div>
                <p class="comment"></p>
            `;
        
            elementBox.innerHTML = algorithm_page;
        
            if (!element_data.image_uploader) {
                document.querySelector('.img-1').style.display = 'none';
            }
            if (!element_data.image_uploader_py) {
                document.querySelector('.img-2').style.display = 'none';
            }
            if (!element_data.image_uploader_res) {
                document.querySelector('.img-3').style.display = 'none';
            }
        
            if (element_data.comments) {
                document.querySelector(".comment").innerHTML = Paragraphs(element_data.comments);
            } else {
                document.querySelector(".comment").style.display = "none";
            }
            //document.querySelector(".button-copy").onclick = (copyTextToClipboard);
        } else {
            elementBox.innerHTML = '<span style="color: red;font-size:18px" class="sentenxe-py"> No matching data found for the given ID.</span>';
        }
        
    })
    .catch(err => {
        console.error(err);
        CreateMessage("error","Erreur",err);
    });
}

document.addEventListener('DOMContentLoaded', get_data_from_json);
function copyTextToClipboard() {
    var text = window.location.href;
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        CreateMessage("success","Copy Text","Copying text command was successful");

    }).catch(err => {
        CreateMessage("error","Oops",'Oops, unable to copy :'+ err);
    });
}

function fallbackCopyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';  
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.width = '2em';
    textarea.style.height = '2em';
    textarea.style.padding = '0';
    textarea.style.border = 'none';
    textarea.style.outline = 'none';
    textarea.style.boxShadow = 'none';
    textarea.style.background = 'transparent';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        CreateMessage("success","Copy Text",'Copying text command was ' + msg);
    } catch (err) {
        CreateMessage("error","Oops",'Oops, unable to copy :'+ err);
    }
    document.body.removeChild(textarea);
}


function next_page() {
    var page_number = parseInt(get_id_from_url()[1]);
    if (!isNaN(page_number) && page_number >= 1 && page_number < 4) {
        window.location.href = `?el_id=4363026331&p=${page_number + 1}`;
    } else {
        CreateMessage("info","Numéro de page",'stop ');

    }
}

function prev_page() {
    var page_number = parseInt(get_id_from_url()[1]);
    if (!isNaN(page_number) && page_number > 1 && page_number <= 4) {
        window.location.href = `?el_id=4363026331&p=${page_number - 1}`;
    } else {
        CreateMessage("info","Numéro de page",'stop ');

    }
}
