
function symbols(input) {
    return input.replace(/([!@#$%^&*()_+\-={}\[\]|:;"'<>,.?\/`~])/g, ' $1 ');
}

function pos(text, subtext, start) {
    return text.indexOf(subtext, start);
}
function python_keywords(input) {
    var keywords = [
        "and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else",
        "except", "False", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "None",
        "nonlocal", "not", "or", "pass", "raise", "return", "True", "try", "while", "with", "yield"
    ];

    var pattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');

    return input.replace(pattern, `<div class="keyword">$1</div>`);
}
function find_char(text, c, start) {
    try{
        if (start === undefined) {
            throw new Error('Start is not defined');
        } 
        else if (start === 1) {
            var p = -1;
            for (let i = 0; i < text.length; i++) {
                if (text[i] === c) {
                    p = i;
                    break;
                }
            }
            return p;
        } 
        else if (start === -1) {
            var p = text.length;
            for (let i= text.length-1; i>=0; i--) {
                if (text[i] === c) {
                    p = i;
                    break;
                }
            }
            return p;
        }
        else {
            throw new Error('Start is not valid');
        }
    }
    catch (err) {
        console.error(err.message);
    }
    
}
function highlightStrings(input) {
    return input.replace(/(["'])(.*?[^\\])\1/g, (match) => {
        return `<div class="string">${match}</div>`;
    });
}
function comments(input) {
    return input.replace(/#.*$/gm, (match) => {
        return `<div class="comment">${match}</div>`;
    });
}
function writeCode(input) {
    if (!input.toLowerCase().trim().startsWith("ecrire")) return input; 
    let content = input.replace(/^ecrire\s*/, "").replace(/^Ecrire\s*/, ""); 
    var com = input.split('#').slice(1) ;
    var results = (comments("#"+com.join('')));
    content = highlightStrings(content) ; 

    return `<div class="code"><div class="syntaxHighlighter">print</div>${content.split('#')[0] +" "+ results}</div><br>`;
}
function read(input) {
    if(!input.toLowerCase().trim().startsWith("lire")) return input;
    var newInput = symbols(input);
    var p1 = find_char(newInput, '(', 1);
    var p2 = find_char(newInput, ')', -1);
    var content = newInput.substring(p1 + 1, p2);
    var NewContent = `"${content.trim()}"`;
    return `<div class="code">${content} = <div class="syntaxHighlighter">input</div>(${highlightStrings(NewContent)})</div><br>`;
}
function variable(input) {
    var p1 = find_char(input, '<', 1);
    var p2 = find_char(input, '-', 1);
    if(!input.toLowerCase().trim().includes("<-") && !(p1+1 == p2)) return input;
    var variables = input.substring(0, p1).trim();
    var content = input.substring(p2+1).trim();
    return `<div class="code">${variables} = ${content}</div><br>`;
}
function Type_of_Data(input) {
    
}
console.log(variable("a <- T[i]"));
let testInput = 'Ecrire("Le message 3crire a afficher", i, "autre Le message a afficher") #comment hello world';
document.querySelector(".output-content").innerHTML = writeCode(testInput)+(read("lire(a)")+variable("a <- T[i]"));
// console.log(writeCode(testInput));

// console.log(read("lire(a)"));
