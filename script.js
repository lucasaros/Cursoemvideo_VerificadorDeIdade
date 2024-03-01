let botaoVerificar = document.querySelector('.form__button');
botaoVerificar.addEventListener('click', ()=> {
    verificar();
})

function verificar() {
    let data = new Date(); //data e a hora atuais
    let anoAtual = data.getFullYear(); //ano atual
    let anoNascimento = document.getElementsByName('year')[0].value;
    let sexo = document.getElementsByName('gender');
    let idade =  anoAtual - anoNascimento;

    if (anoNascimento < 1900 || anoNascimento > anoAtual) {
        alert('Ano de nascimento inválido!')

    } else {
        let textoHomem = `Detectamos Homem de ${idade} anos`;
        let textoBebe = idade == 1 ? `Detectamos Bebê de ${idade} ano` : `Detectamos Bebê de ${idade} anos`;
        let textoCrianca = `Detectamos Criança de ${idade} anos`;
        let textoAdolescente = `Detectamos Adolescente de ${idade} anos`;
        let textoJovem = `Detectamos Jovem de ${idade} anos`;
        let textoSenhor = `Detectamos Senhor de ${idade} anos`;

        if (sexo[0].checked) {
            if (idade <= 3) {
                resultado(textoBebe, 'imagens/bebe-masc.png');
            } else if (idade <= 12) {
                resultado(textoCrianca, 'imagens/crianca-masc.png');
            } else if (idade <= 17) {
                resultado(textoAdolescente, 'imagens/adolescente-masc.png');
            } else if (idade <= 29) {
                resultado(textoJovem, 'imagens/jovem-masc.jpg');
            } else if (idade <= 60) {
                resultado(textoHomem, 'imagens/homem.png');    
            } else {
                resultado(textoSenhor, 'imagens/senhor.png');
            }

        } else {
            let textoMulher = `Detectamos Mulher de ${idade} anos`;
            let textoSenhora = `Detectamos Senhora de ${idade} anos`;

            if (idade <= 3) {
                resultado(textoBebe, 'imagens/bebe-fem.png')
            } else if (idade <= 12) {
                resultado(textoCrianca, 'imagens/crianca-fem.jpg')
            } else if (idade <= 17) {
                resultado(textoAdolescente, 'imagens/adolescente-fem.png')
            } else if (idade <= 29) {
                resultado(textoJovem, 'imagens/jovem-fem.png')
            } else if (idade <= 60) {
                resultado(textoMulher, 'imagens/mulher.png')
            } else {
                resultado(textoSenhora, 'imagens/senhora.png')
            }
        }
    }
}

function resultado(texto, imagem) {
    let textoResultado = document.querySelector('.result__text');
    textoResultado.innerText = texto;

    let imagemResultado = document.querySelector('.result__image');
    imagemResultado.src = imagem;
    imagemResultado.style.display = 'block'
}

