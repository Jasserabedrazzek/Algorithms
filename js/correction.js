
function Paragraphs(text) {
    const cleanedText = text.replace(/ {2,}/g, ' ');
    const parts = cleanedText.split(/\n/);
    const paragraphs = parts.map(part => {
        const tabbedPart = part.replace(/\t/g, '<span class="tab"></span>');
        return `<p>${tabbedPart.trim()}</p>`;
    }).join('');
    return paragraphs;
}

function Id() {
    var url = window.location.search
    if (url.indexOf('?exe=')!== -1) {
        var id = url.split('?exe=')[1]
        return id
    }
    
}
function load_data(filename) {
    fetch(filename)
    .then(response => {
        if (!response.ok) {
            throw new Error ('Could not load data ')
        }
        return response.json()
    })
    .then(data=> {
        let get_data ;
        let num ;
        for(let i=0 ; i<data.length ; i++) {
            if (data[i].id == Id()) {
                get_data = data[i]
                num = i+1
            }
        }
        if (get_data) {
            const box = `<div class="box-theo">
                <div class="box-exe">
                    <span class="num-exe">Exercice ${num} :</span>
                    <span class="title">${get_data.name}</span>
                    <p class="exe-content">${Paragraphs(get_data.exercise)}</p>
                    <span class="num-exe">Correction</span>
                    <pre style="overflow-x:auto" class="exe-content">${Paragraphs(get_data.correction.replace(/\n/g, '<div class="space">')).replace(/‘/g,"'").replace(/’/g,"'")}</pre>

                </div>
                
            </div>`
            document.querySelector('.content').innerHTML = box
        }
        

    })
    .catch(err => 
    {
        console.log(err)
    }
    )

}
load_data('/json/exe.json')
