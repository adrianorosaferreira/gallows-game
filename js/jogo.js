var criaJogo = function(sprite) {

    let palavraSecreta,
        lacunas,
        etapa;

    var iniciaJogo = function() {
        palavraSecreta = '';
        etapa = 1;
        lacunas = [];
        sprite.reset();
    }

    var ganhou = function() {
        return lacunas.length ?
            !lacunas.some(function(lacuna) {
                return lacuna == '';
            }) :
            false;
    }

    var perdeu = function() {
        return sprite.isFinished();
    }

    var ganhouOuPerdeu = function() {
        return perdeu() || ganhou();
    }

    var reinicia = function() {
        iniciaJogo();
    }

    var processaChute = function(chute) {
        let exp = new RegExp(chute, 'gi'),
            resultado,
            achou = false;

        while (resultado = exp.exec(palavraSecreta)) {
            lacunas[resultado.index] = chute;
            achou = true;
        }

        if (!achou) sprite.nextFrame();
    }

    var criaLacunas = function(palavra) {
        lacunas = Array(palavra.length).fill('');
    }

    var proximaEtapa = function() {
        ++etapa;
    }

    var setPalavraSecreta = function(palavra) {
        palavraSecreta = palavra;
        proximaEtapa();
        criaLacunas(palavra);
    }

    var getEtapa = function() {
        return etapa;
    }
    var getLacunas = function() {
        return lacunas;
    }

    iniciaJogo();

    return {
        setPalavraSecreta: setPalavraSecreta,
        getEtapa: getEtapa,
        getLacunas: getLacunas,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia
    }
}