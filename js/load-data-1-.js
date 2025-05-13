const boxesContents = document.querySelectorAll('.boxs');

async function loadData(filename) {
    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error(response.statusText);
        
        let data = await response.json();
        data = sortedLists(data);

        data.forEach(item => {
            const box = document.createElement('a');
            box.style.textDecoration = 'none';
            box.href = (item.id) != 4363026331 ?('#' + item.id) : item.id;
            box.className = 'algo-box';
            box.setAttribute('data-bs-toggle', 'modal');
            box.setAttribute('data-bs-target', '#' + item.id);

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
                fragment.appendChild(box.cloneNode(true));
                boxesContent.appendChild(fragment);
            });

            createModal(item);
        });
    } catch (err) {
        console.error("Erreur de chargement :", err.message);
    }
}

function sortedLists(data) {
    let changed = true;
    while (changed) {
        changed = false;
        for (let i = 0; i < data.length - 1; i++) {
            if (data[i].algo > data[i + 1].algo) {
                [data[i], data[i + 1]] = [data[i + 1], data[i]];
                changed = true;
            }
        }
    }
    return data;
}

async function createModal(item) {
    if (document.getElementById(item.id)) return;
    const response = await fetch("/json/algorithms.json");
    if (!response.ok) throw new Error(response.statusText);
    
    let data = await response.json();
    data = sortedLists(data);
    var _itm ;
    data.forEach(itm => {
        if (itm.id == item.id) {
            _itm = itm;
        }
    })
    const modalHTML = `
    <div class="modal fade" id="${item.id}" tabindex="-1" aria-labelledby="${item.id}-label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-primary" id="${item.id}-label">${item.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" >
                    <div style="overflow-y:auto">
                        <table class="table" >
                            <thead>
                                <tr>
                                    <th class="bg-info text-light" style="text-align:center;">Algorithm</th>
                                    <th class="bg-info text-light" style="text-align:center;">Python</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="bg-info-subtle"><pre><code>${_itm.algo}</code></pre></td>
                                    <td class="bg-info-subtle"><pre><code>${_itm.py_el}</code></pre></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <br>
                    <p>${_itm.description}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn bg-danger text-light" data-bs-dismiss="modal">Fermer</button>
                    <a href="${item.url}" class="btn btn-primary">Voir Plus</a>
                </div>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

loadData('/json/algorithm_s.json');
