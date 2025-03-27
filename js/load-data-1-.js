const boxesContents = document.querySelectorAll('.boxs');
function show_card(data) {

    document.querySelector('.card').style.display = 'flex';
    document.querySelector('.card-title').textContent = data.title;
    document.querySelector('.card-content').src = `../embad.html?el_id=${data.id}`;
    document.querySelector('.link-page').href = data.url;
}

async function loadData(filename) {
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        let data = await response.json();
        data = sortedLists(data);
        data.forEach(item => {
            const box = document.createElement('a');
            box.href = '#'+item.id;
            box.className = 'algo-box';
            const strutName = document.createElement('span');
            strutName.className = 'strut-name';
            strutName.textContent = item.algo;

            const title = document.createElement('span');
            title.className = 'titles';
            title.textContent = item.title;

            const description = document.createElement('p');
            description.className = 'description';
            description.textContent = item.description;

            box.appendChild(strutName);
            box.appendChild(title);
            box.appendChild(description);

            boxesContents.forEach(boxesContent => {
                const fragment = document.createDocumentFragment();
                fragment.appendChild(box);
                boxesContent.appendChild(fragment);
            });
            box.addEventListener('click', () => show_card(item));

  
        });
    } catch (err) {
        console.error(err.message);
    }
}

loadData('/json/algorithm_s.json');

function sortedLists(data) {
    let p = true;
    while (p) {
        p = false;
        for(let i = 0; i < data.length - 1; i++) {
            if (data[i].algo > data[i + 1].algo) { 
                const aux = data[i];
                data[i] = data[i + 1];
                data[i + 1] = aux;
                p = true;
            }
        }
    }
    return data;
}



function hide_card() {
    document.querySelector('.card').style.display = 'none';
    document.querySelector('.card-content').innerHTML = '';
    window.location.href = '#';
}


