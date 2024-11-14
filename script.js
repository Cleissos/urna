function botao1() {
    document.getElementById('campo').value += '1';
    var b1 = document.getElementById('b1');
    b1.play();
}

function botao2() {
    document.getElementById('campo').value += '2';
    var b1 = document.getElementById('b1');
    verificaCandidato()
    b1.play();
}

function botao3() {
    document.getElementById('campo').value += '3';
    var b1 = document.getElementById('b1');
    verificaCandidato()
    b1.play();
}

function botao4() {
    document.getElementById('campo').value += '4';
    var b1 = document.getElementById('b1');
    verificaCandidato()
    b1.play();
}

function botao5() {
    document.getElementById('campo').value += '5';
    var b1 = document.getElementById('b1');
    b1.play();
}

function botao6() {
    document.getElementById('campo').value += '6';
    var b1 = document.getElementById('b1');
    b1.play();
}

function botao7() {
    document.getElementById('campo').value += '7';
    var b1 = document.getElementById('b1');
    verificaCandidato()
    b1.play();
}

function botao8() {
    document.getElementById('campo').value += '8';
    var b1 = document.getElementById('b1');
    b1.play();
}

function botao9() {
    document.getElementById('campo').value += '9';
    var b1 = document.getElementById('b1');
    b1.play();
}

function botao0() {
    document.getElementById('campo').value += '0';
    var b1 = document.getElementById('b1');
    b1.play();
}

function branco() {
    var b1 = document.getElementById('b1');
    b1.play();
}

function corrige() {

    var b1 = document.getElementById('b1');
    b1.play();
    var texto = document.getElementById('campo').value;

    if (texto == '17') {
        var imagem = document.getElementById('bolsonaro');
        var imagem2 = document.getElementById('justica');
        imagem2.style.display = 'block';
        imagem.style.display = 'none'
    } else if (texto == '13') {
        var imagem = document.getElementById('lula');
        var imagem2 = document.getElementById('justica')
        imagem2.style.display = 'block';
        imagem.style.display = 'none'
    } else if (texto == '12') {
        var imagem = document.getElementById('ciro');
        var imagem2 = document.getElementById('justica')
        imagem2.style.display = 'block';
        imagem.style.display = 'none'
    } else if(texto == '14'){
        var imagem = document.getElementById('padreKelmon');
        var imagem2 = document.getElementById('justica')
        imagem2.style.display = 'block';
        imagem.style.display = 'none'
    }
    else if (texto == '') {
        var imagem2 = document.getElementById('justica');
        var imagem = document.getElementById('votoInvalido');
        imagem2.style.display = 'block';
        imagem.style.display = 'none';
    }
    else {
        var imagem = document.getElementById('votoInvalido');
        var imagem2 = document.getElementById('justica')
        imagem2.style.display = 'block';
        imagem.style.display = 'none';
    }

    document.getElementById('campo').value = '';
}




function verificaCandidato() {
    // Primeiro, ocultar todas as imagens
    var imagens = document.querySelectorAll('#div01 img');
    imagens.forEach(function (img) {
        img.style.display = 'none';
    });

    var texto = document.getElementById('campo').value;

    // Verificar o valor digitado e exibir a imagem correspondente
    if (texto == '17') {
        var imagem = document.getElementById('bolsonaro');
        imagem.setAttribute('src', 'img/cachorro1.png');
        imagem.style.display = 'block';
    } else if (texto == '13') {
        var imagem = document.getElementById('lula');
        imagem.setAttribute('src', 'img/gato2.png');
        imagem.style.display = 'block';
    } else if (texto == '12') {
        var imagem = document.getElementById('ciro');
        imagem.setAttribute('src', 'img/cachorro2.png');
        imagem.style.display = 'block';
    }else if(texto == '14'){
        var imagem = document.getElementById('padreKelmon');
        imagem.setAttribute('src', 'img/gat-presidente.png');
        imagem.style.display = 'block';
    }
    else {
        // Se o texto não for '17', podemos exibir uma imagem padrão ou mensagem de erro
        var imagem = document.getElementById('votoInvalido');
        var imagem2 = document.getElementById('justica')
        imagem.setAttribute('src', '../img/votoInvalido.png');
        imagem.style.display = 'block';
        imagem2.style.display = 'none';
    }
}

function confirma() {

    //Tocar som de confirmação
    var somConfirma = document.getElementById('somConfirma');
    somConfirma.play();

    var imagens = document.querySelectorAll('#div01 img');
    imagens.forEach(function (img) {
        img.style.display = 'none';
    });

    var imagem2 =document.getElementById('fim')
    imagem2.setAttribute('src', '../img/FIM2.png')
    imagem2.style.display = 'block'

    //Essa funçaõ dá um delay de 2s quando votar e apertar o botão confirma, ela volta à imagem original
    setTimeout(function () {
        // Ocultar a imagem atual
        //var imagem = document.getElementById('justica')
        //imagem.style.display = 'none';
        imagem2.style.display = 'none'

        // Exibir a imagem da justiça
        var imagemJustica = document.getElementById('justica');
        imagemJustica.style.display = 'block';

        // Limpar o campo de entrada
        document.getElementById('campo').value = '';
    }, 2000); // 2000 milissegundos = 2 segundos de atraso
}