const criaJogo = function(sprite) {

    let palavraSecreta,
        lacunas,
        etapa;

    const iniciaJogo = () => {
        palavraSecreta = '';
        etapa = 1;
        lacunas = [];
        sprite.reset();
    }

    const ganhou = () => lacunas.length ?
        !lacunas.some(function(lacuna) {
            return lacuna == '';
        }) :
        false;

    const perdeu = () => sprite.isFinished();

    const ganhouOuPerdeu = () => perdeu() || ganhou();

    const reinicia = () => iniciaJogo();

    const processaChute = chute => {

        if (!chute.trim()) throw Error('Chute inválido');

        const exp = new RegExp(chute, 'gi');
        let resultado,
            achou = false;

        while (resultado = exp.exec(palavraSecreta)) {
            lacunas[resultado.index] = chute;
            achou = true;
        }

        if (!achou) sprite.nextFrame();
    }

    const criaLacunas = palavra => lacunas = Array(palavra.length).fill('');

    const proximaEtapa = () => ++etapa;

    const setPalavraSecreta = palavra => {

        if (!palavra.trim()) throw Error('Palavra inválida');

        palavraSecreta = palavra;
        proximaEtapa();
        criaLacunas(palavra);
    }

    const getEtapa = () => etapa;

    const getLacunas = () => lacunas;

    iniciaJogo();

    return {
        setPalavraSecreta,
        getEtapa,
        getLacunas,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia
    }
}