let Camille = document.getElementById("Camille");
let Romain = document.getElementById("Romain");
let Wilfried = document.getElementById("Wilfried");

Camille.addEventListener('mouseover', (e) => {
    console.log(e.target.id);
});

Romain.addEventListener('mouseover', (e) => {
    console.log(e.target.id);
});

Wilfried.addEventListener('mouseover', (e) => {
    console.log(e.target.id);
});