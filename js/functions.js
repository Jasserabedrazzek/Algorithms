function comparaison(a, b) {
    return a == b;
}

function Random_integer_number() {
    return Math.floor(Math.random() * 10);
}

function Random_float_number() {
    return Math.random() * 10;
}

function Arrondi(x) {
    var res = '';
    for (let i=0;i<x.length;i++) {
        res += `${round(x)}<br>`;
    }
    return res;
    //return x.map(num => Math.round(num));
}

function Convch(n) {
    return n.toString();
}

function Affichage(message) {
    return message;
}

function efface(ch, s, f) {
    return ch.substring(0, s) + ch.substring(f);
}

function Estnum(num) {
    return !isNaN(Number(num));
}

function recherche(x, list) {
    return list.includes(x);
}

function Long(ch) {
    return ch.length;
}

function Majus(ch) {
    return ch.toUpperCase();
}

function Pos(ch1, ch2) {
    if (typeof ch1 !== "string" || typeof ch2 !== "string") {
        return -1;
    }
    return ch1.indexOf(ch2);
}

function Boucle_Pour(s, f) {
    let res = ['python'];
    for (let i = s; i < f; i++) {
        res.push('>> python');
    }
    return res.join('\n');
}

function Racine(x) {
    return Math.sqrt(x);
}

function Sous_chaine(ch, s, f) {
    return ch.substring(s, f);
}

function Tronc(x) {
    return Math.trunc(x);
}

function Valeur(x, t) {
    if (t === 'entier') {
        return Math.floor(Number(x)) + ' ' + typeof Math.floor(Number(x));
    } else if (t === 'reel') {
        return parseFloat(x);
    }
}

function Abs(x) {
    return Math.abs(x);
}

function Chr(x) {
    return String.fromCharCode(x);
}

function DIV(n, x) {
    return n > x ? Math.floor(n / x) : 0;
}

function Mod(n, x) {
    return n > x ? n % x : n;
}

function Ord(ch) {
    return ch.charCodeAt(0);
}

function Pow(x, n) {
    return Math.pow(x, n);
}

var funcs = {
    "Affichage(`2\nbac 2024`)": Affichage(`2\n>> bac 2024`),
    "Racine(16)": Racine(16),
    "Abs(-4)": Abs(-4),
    "Tronc(2.6)": Tronc(2.6),
    "Arrondi([2.6,2.5,2.4])": Arrondi([2.6, 2.5, 2.4]),
    "Pow(2,4)": Pow(2, 4),
    "Random_integer_number()": Random_integer_number(),
    "Random_float_number()": Random_float_number(),
    "Mod(24,10)": Mod(24, 10),
    "DIV(24,10)": DIV(24, 10),
    "comparaison(3,5)": comparaison(3, 5),
    "Sous_chaine(\"bac math 2024\",0,3)": Sous_chaine("bac math 2024", 0, 3),
    "Ord('a')": Ord('a'),
    "Chr(65)": Chr(65),
    "Long('bac 2024')": Long('bac 2024'),
    "Pos('2020', '2')": Pos('2020', '2'),
    "Sous_chaine('informatique',2,5)": Sous_chaine('informatique', 2, 5),
    "efface('informatique',4,7)": efface('informatique', 4, 7),
    "Convch(2024)": Convch(2024),
    "Valeur('24','entier')": Valeur('24', 'entier'),
    "Majus('bac math 2024')": Majus('bac math 2024'),
    "Boucle_Pour(0,5)": Boucle_Pour(0, 5),
    "recherche(2,[5,4,8,9,14,7,10,2])": recherche(2, [5, 4, 8, 9, 14, 7, 10, 2]),
    "Estnum('255')": Estnum('255'),
};

// Affichage des résultats
console.log(funcs);
