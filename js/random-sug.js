const list = [
    'Affichage',
    'Affectation',
    'boucle pour',
    'saisie de donnée',
    'type Caractère',
    'Boucle Tant que',
    'structures de contrôle conditionnelles'
]

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Inclusive of both min and max
}

const searchAlgo = document.querySelector('.search-algo')

window.onload = () => {
    l = list.length
    n = getRandomNumber(0, l-1)
    console.log(list[n])
    searchAlgo.setAttribute('placeholder', list[n])
}