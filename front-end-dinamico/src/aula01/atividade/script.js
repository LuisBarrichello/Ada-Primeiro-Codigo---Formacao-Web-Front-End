function enviar(event, elemento) {
    event.preventDefault();
    validaCPF(elemento)
    validaRG(elemento)
    validaCEP(elemento)
    validaTelefone(elemento)
    validaEmail(elemento)
}

/* CPF */
function validaCPF(elemento) {
    let cpf = elemento.querySelector('#cpf')?.value;

    cpf = cpf.replace(/\D/g, '');

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

    if(resto != parseInt(cpf.substring(10,11))) throw new Error('CPF inválido')
}

/* rg */
function validaRG(elemento) {
    let rg = elemento.querySelector('#rg')?.value;

    // Remova quaisquer pontos e traços do RG
    rg = rg.replace(/\D/g, '');

    // Verifique se o RG tem 9 dígitos
    if (rg.length !== 9) {
        throw new Error('Digite um Rg válido');
    }
}

/* CEP */
function validaCEP(elemento) {
    let cep = elemento.querySelector('#cep')?.value;
    
    cep = cep.replace(/\D/g, '');

    const validacep = /^[0-9]{8}$/;

    if(!validacep.test(cep)) throw new Error('CP inválido')
}

/* telefone */
function validaTelefone(elemento){
    const tel = elemento.querySelector('#tel')?.value;
    exp = /\(\d{2}\)\ \d{5}\-\d{4}/
    if(!exp.test(tel)) throw new Error('Numero de Telefone Invalido!');
}

/* E-mail */
function validaEmail(elemento) {
    const email = elemento.querySelector('#email')?.value;

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!regexEmail.test(email)) throw new Error('Email inválido')
}

/* Exemplo de teste
cpf - 12345678909
rg 12345678-9
cep 12345-678
tel (99) 12345-6788
email emailaleatorio123@example.com
*/