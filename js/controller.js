var criaController = function(jogo) {

    let $entrada = document.querySelector('#entrada');
    let $lacunas = document.querySelector('.lacunas');

    var exibeLacunas = function() {

        while ($lacunas.firstChild) {
            $lacunas.removeChild($lacunas.firstChild);
        }
        jogo.getLacunas().forEach((valor, indice) => {
            var item = document.createElement('li');
            item.classList.add('lacuna');
            item.textContent = valor;
            $lacunas.appendChild(item);
        })
    };

    var mudaPlaceHolder = function(texto) {
        $entrada.placeholder = texto;
    };

    var guardaPalavraSecreta = function() {
        jogo.setPalavraSecreta($entrada.value.trim());
        $entrada.value = '';
        mudaPlaceHolder('chute');
        exibeLacunas();

    };

    var leChute = function() {
        jogo.processaChute($entrada.value.trim().substr(0, 1));
        $entrada.value = '';
        exibeLacunas();
    }

    var inicia = function() {

        $entrada.addEventListener('keypress', function(e) {

            if (e.charCode == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;

                    case 2:
                        leChute();
                        break;

                }
            }
        })
    };

    return { inicia: inicia };
};