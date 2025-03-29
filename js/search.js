let jsonData = null;

fetch('../json/sugg.json')
    .then(response => response.json())
    .then(data => {
    jsonData = data;
    })
    .catch(error => {
    console.error("Error loading JSON:", error);
    });

function searchJSON() {
    const query = document.getElementById("search").value.trim().toLowerCase();
    const resultsDiv = document.getElementById("result");
    resultsDiv.innerHTML = "";
    if (query.length ==0) {
        resultsDiv.style.display = "none";
    }
    else {
        resultsDiv.style.display = "flex";
    }
    if (!query || !jsonData) return;

    const results = [];

    if (jsonData.algorithms && Array.isArray(jsonData.algorithms)) {
    jsonData.algorithms.forEach(item => {
        if (item.title && item.description && item.url && item.algo) {
        const titleLower = item.title.toLowerCase();
        const descriptionLower = item.description.toLowerCase();
        const algoLower = item.algo.toLowerCase(); 

        if (
            titleLower.includes(query) ||
            descriptionLower.includes(query) ||
            algoLower.includes(query)
        ) {
            results.push({
            name: item.algo,
            title: item.title,
            description: item.description,
            type: "Algorithme",
            link: '/algorithms/'+item.url
            });
        }
        }
    });
    }

    if (jsonData.exercises && Array.isArray(jsonData.exercises)) {
    jsonData.exercises.forEach(item => {
        if (item.name && item.exercise && item.link && item.correction) {
        const nameLower = item.name.toLowerCase();
        const exerciseLower = item.exercise.toLowerCase();
        const algoLower = item.correction.toLowerCase();

        if (
            nameLower.includes(query) ||
            exerciseLower.includes(query) ||
            algoLower.includes(query)
        ) {
            results.push({
            name: item.name,
            description: item.exercise,
            type: 'Exercice',
            link: '/exercices/'+item.link
            });
        }
        }
    });
    }

    if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    } else {
    results.forEach(result => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<a href="${result.link}" title="${result.name}" class="res">
                                <div class="res-name">${result.name}</div>
                                <div class="res-title">${result.title ? result.title : ""}</div>
                                <div class="res-type">${result.type}</div>
                                <p class="res-desc">${result.description}</p>
                            </a>`;
        resultsDiv.appendChild(itemDiv);
    });
    }
}