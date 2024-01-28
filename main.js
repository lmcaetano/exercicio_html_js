const form = document.getElementById('form-validacao');
const numeroA = document.querySelector('#numeroA');
const numeroB = document.querySelector('#numeroB');
const mensagem = document.querySelector('.mensagem');
let mensagemPositiva = document.querySelector('#mensagemPositiva');
let mensagemNegativa = document.querySelector('#mensagemNegativa');
let textoComplementar = null;


form.addEventListener('submit', function(e){
    e.preventDefault();
    validacao();
});

numeroA.addEventListener('click',function(e){
    e.click;
    limpaCampos();
})

function testaValores(){
    if(parseInt(numeroB.value) > parseInt(numeroA.value)) {
        textoComplementar = 'maior';
        return true;
    } if (parseInt(numeroB.value) == parseInt(numeroA.value)){
        textoComplementar = 'igual';
        return false;
    } else {
        textoComplementar= 'menor';
        return false;
    }
};

function validacao(){
    testaValores() ? validacaoOK() : validacaoNOK();
}

function validacaoOK(){
    let labelPositivo = `O valor do numero B (${numeroB.value}) é maior que numero A (${numeroA.value})!`
    mensagem.classList.add('mensagemPositiva');
    mensagem.style.display = 'block';
    mensagemPositiva.style.display = 'block';
    mensagemPositiva.innerHTML = labelPositivo;
};

function validacaoNOK(){
    let labelNegativo = `O valor do numero B (${numeroB.value}) é ${textoComplementar} que numero A (${numeroA.value}). Tente novamente!`
    mensagem.classList.add('mensagemNegativa');
    mensagem.style.display = 'block';
    mensagemNegativa.style.display= 'block';
    mensagemNegativa.innerHTML = labelNegativo;
    numeroA.value = '';
    numeroB.value ='';
};

function limpaCampos(){
    mensagem.classList.remove('mensagemPositiva');
    mensagem.classList.remove('mensagemNegativa');
    mensagem.style.display = 'none';
    mensagemNegativa.style.display= 'none';
    numeroA.value = '';
    numeroB.value='';
}

