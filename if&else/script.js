    /* ERRADOOOOO*/


const bomdia = 11;
const boatarde = 17;
const boanoite = 23;

if (bomdia <= 11) { 

    console.log('bom dia');

} else if (boatarde <= 17) {

    console.log('boa tarde');

} else if  (boanoite <= 23) {

    console.log('boa noite');

} else 
    console.log('q hr e essa crlh')

    /* CERTOOOOOOO*/

const hora = parseInt(prompt("Por favor, insira a hora (0-23):"));

if (hora >= 0 && hora <= 11) { 

    console.log('Bom dia');

} else if (hora >= 12 && hora <= 17) {

    console.log('Boa tarde');

} else if (hora >= 18 && hora <= 23) {

    console.log('Boa noite');
    
} else {
    console.log('Hora inválida');
}
