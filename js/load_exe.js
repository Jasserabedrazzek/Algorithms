const theoreique_content = document.querySelector('.box-theo')
const pratique_content = document.querySelector('.box-pra')
function load_exercises(filename) {
    fetch(filename)
    .then(response => {
        if(!response.ok) {
            throw new Error ('Failed to load data ')
        }
        return response.json()
    })
    .then(data => {
        
        theoreique_content.innerHTML = ``
        for (let i=0; i<data.length; i++) {
            var box = `<a href="${data[i].link}"  class="box-exe">
                    <span class="num-exe">Exercice ${i+1} :</span>
                    <span class="title">${data[i].name}</span>
                    <p class="exe-content" style="color: black;"> ${Paragraphs(data[i].exercise)} </p>
                    <hr>
                    <div class="gotolink">
                        Correction
                    </div>
                </a>
        `
            theoreique_content.innerHTML += box
        }
        
    })
    .catch(err=> {
        console.error(err.message)
    })
}
load_exercises('/json/exe.json')
function Paragraphs(text) {
    const cleanedText = text.replace(/ {2,}/g, ' ');
    const parts = cleanedText.split(/\n/);
    const paragraphs = parts.map(part => {
        const tabbedPart = part.replace(/\t/g, '<span class="tab"></span>');
        return `<p>${tabbedPart.trim()}</p>`;
    }).join('');
    return paragraphs;
}
function theorique() {
    theoreique_content.style.display = 'flex';
    pratique_content.style.display = 'none';
}
function pratique() {
    theoreique_content.style.display = 'none';
    pratique_content.style.display = 'flex';
}