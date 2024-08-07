const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFFFF';
}