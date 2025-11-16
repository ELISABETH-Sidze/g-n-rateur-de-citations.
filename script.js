const citations = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. — Gandhi",
    "Le succès, c’est tomber sept fois, se relever huit. — Proverbe japonais",
    "Le futur appartient à ceux qui croient à la beauté de leurs rêves. — Eleanor Roosevelt",
    "Le plus grand risque est de ne prendre aucun risque. — Mark Zuckerberg",
    "Tout ce que tu peux imaginer est réel. — Picasso"
];

function nouvelleCitation() {
    const citationElem = document.getElementById("citation");
    const index = Math.floor(Math.random() * citations.length);
    citationElem.textContent = citations[index];
}