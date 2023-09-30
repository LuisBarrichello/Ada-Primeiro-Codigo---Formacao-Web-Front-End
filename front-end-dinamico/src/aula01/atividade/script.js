/* CPF */
function enviar(event, elemento) {
    event.preventDefault();
    validar(elemento)
}

function validar(elemento) {
    let cpf = elemento.querySelector('#cpf')?.value;
    if(cpf.length != 11 || cpf === '' || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")  throw new Error('CPF inválido')

    let soma = 0
    let resto = 0
    for(i=1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if((resto === 10) || (resto == 11)) resto = 0;

    if(resto != parseInt(cpf.substring(10,11))) throw Error('CPF inválido')

    console.log('CPF VALIDO')
    return true
}

/* rg */

/* telefone */
function ValidaTelefone(telefone){
    const tel = document.getElementById('tel')
    exp = /\(\d{2}\)\ \d{4}\-\d{4}/
    if(!exp.test(tel.value))
            alert('Numero de Telefone Invalido!');
}