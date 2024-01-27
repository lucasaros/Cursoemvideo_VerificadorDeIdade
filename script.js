function verificar() {
    let data = new Date(); //data e a hora atuais
    let anoAtual = data.getFullYear(); //ano atual
    let anoNascimento = document.getElementsByName('ano')[0].value;
    let sexo = document.getElementsByName('sexo');
    let idade =  anoAtual - anoNascimento;
    
    if (anoNascimento == 0 || anoNascimento > anoAtual) {
        alert('Verifique os dados e tente novamente')

    } else {
        if (sexo[0].checked) {
            let textoM = `Detectamos Homem de ${idade} anos`;
            
            if (idade <= 7) {
                resultado(textoM, 'imagens/crianca-M.png');
            } else if (idade <= 17) {
                resultado(textoM, 'imagens/adolescente-M.png');
            } else if (idade < 30) {
                resultado(textoM, 'imagens/jovem-M.jpg');
            } else if (idade <= 49) {
                resultado(textoM, 'imagens/adulto-M.png');
            } else {
                resultado(textoM, 'imagens/senhor-M.png');
            }

        } else {
            let textoF = `Detectamos mulher de ${idade} anos`;

            if (idade <= 7) {
                resultado(textoF, 'imagens/crianca-F.png')
            } else if (idade <= 17){
                resultado(textoF, 'imagens/adolescente-F.png')
            } else if (idade < 30){
                resultado(textoF, 'imagens/jovem-F.png')
            } else if (idade <= 49){
                resultado(textoF, 'imagens/adulta-F.png')
            }else {
                resultado(textoF, 'imagens/senhora-F.png')
            }
        }
    }
}


function resultado(texto, imagem) {
    let textoResultado = document.querySelector('.resultado');
    textoResultado.innerText = texto;

    let imagemResultado = document.querySelector('.imagem');
    imagemResultado.src = imagem;
}

