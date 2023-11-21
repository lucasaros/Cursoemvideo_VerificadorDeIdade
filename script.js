function verificar() {
    let data = new Date() //armazena a data e a hora atuais
    let anoAtual = data.getFullYear() 
    //obtém o ano atual da data armazenada na variável "data"

    let anoUsuario = document.getElementById('ano').value 
    // value: para obter o valor do elemento inserido
    let resultado = document.querySelectorAll('.resultado')
    
    let imagem = document.getElementsByClassName('imagem')[0]

    if (anoUsuario == 0 || anoUsuario > anoAtual){
        alert('Verifique os dados e tente novamente')
        //verificando se os dados são válidos antes de continuar a execução    
    } else {
        let sexo = document.getElementsByName('sexo')
        //obtém os dois itens com o name:"sexo" 
        let idade =  anoAtual - anoUsuario
        let genero = ''

        if (sexo[0].checked) { 
            let genero = 'Homem'
            resultado[0].innerText = `Detectamos ${genero} de ${idade} anos`
         //verificando qual índice com name:"sexo" está marcado   

            if (idade <= 7) {
                imagem.src = 'imagens/crianca-M.png'
            } else if (idade <= 17) {
                imagem.src = 'imagens/adolescente-M.png'
            } else if (idade < 30) {
                imagem.src = 'imagens/jovem-M.png'
            } else if (idade <= 49) {
                imagem.src = 'imagens/adulto-M.png'
            } else {
                imagem.src = 'imagens/senhor-M.png'
            }

        } else {
            let genero = 'Mulher'
            resultado[0].innerText = `Detectamos ${genero} de ${idade} anos`

            if (idade <= 7) {
                imagem.src = 'imagens/crianca-F.jpg'
            } else if (idade <= 17){
                imagem.src = 'imagens/adolescente-F.jpg'
            } else if (idade < 30){
                imagem.src = 'imagens/jovem-F.jpg'
            } else if (idade <= 49){
                imagem.src = 'imagens/adulta-F.jpg'
            }else {
                imagem.src = 'imagens/senhora-F.png'
            }
        }
    }
}

//imagem.src = 'imagens/adolescente-F.jpg'