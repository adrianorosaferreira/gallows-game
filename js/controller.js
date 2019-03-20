const criaController = jogo => {

    let $entrada = document.querySelector('#entrada');
    let $lacunas = document.querySelector('.lacunas');

    const exibeLacunas = () => {

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

    const mudaPlaceHolder = texto => $entrada.placeholder = texto;

    const guardaPalavraSecreta = () => {
        try {
            jogo.setPalavraSecreta($entrada.value.trim());
            $entrada.value = '';
            mudaPlaceHolder('chute');
            exibeLacunas();

        } catch (error) {
            alert(error.message)
        }

    };

    const reiniciaTela = () => {
        jogo.reinicia();
        mudaPlaceHolder('Palavra secreta');
        $entrada.value = '';
        exibeLacunas();
    }

    const leChute = () => {
        try {
            jogo.processaChute($entrada.value.trim().substr(0, 1));
            $entrada.value = '';
            exibeLacunas();

            setInterval(() => {
                if (jogo.ganhouOuPerdeu()) {
                    alert(jogo.ganhou() ? 'Parabéns, você venceu :)' : 'Não fique triste, você vencerá da proxima vez ;)');
                    reiniciaTela();
                }
            }, 500);

        } catch (error) {
            alert(error.message);
        }
    }

    const inicia = () => {

        $entrada.addEventListener('keypress', (e) => {

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

    return { inicia };
};