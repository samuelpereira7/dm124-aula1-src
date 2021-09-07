let dataNasc = '24/03/1992';
//console.log('Nascido em ' + dataNasc + ', natural de Oliveira-MG');


const antes = 'antes';
const validaEscopo = function() {
    const antesNaFunc = 'antes-na-func';
    console.log(`Na Func ${antes}, ${depois}, ${antesNaFunc}, ${depoisNaFunc}, ${naoDefinida}`);
    const depoisNaFunc = 'depois-na-func';
}
const depois = 'depois';
const naoDefinida = 'naoDefinida';
validaEscopo();