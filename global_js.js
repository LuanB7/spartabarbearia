//Agendar Option


function agendarOption(finalIdNumber, iptcheckbox) {

    setTimeout(function() {

        var opcao = document.getElementById(`a-m-option-${finalIdNumber}`);

        if (iptcheckbox.checked) {
            opcao.style.backgroundColor = "rgb(238, 0, 40)";
        } else {
            opcao.style.backgroundColor = "rgb(51, 56, 56)";
        }

    }, 001)


}

function agendarValor() {
    setTimeout(function() {
        var checkbox1 = document.getElementById('agendar-modal-option-check-1');
        var checkbox2 = document.getElementById('agendar-modal-option-check-2');
        var precoSubstituir = document.getElementById('agendar-box-modal-valor');
    
        
        
        if (checkbox1.checked) {
            var valor1 = 30;
        } else {
            var valor1 = 0;
        }
    
        if (checkbox2.checked) {
            var valor2 = 20;
        } else {
            var valor2 = 0;
        }
    
        var valorTotal = valor1 + valor2;
    
        precoSubstituir.innerHTML = `R$ ${valorTotal}`;
    }, 001)

}

function aparacerAgendarModal() {
    var agendarModal = document.querySelector('.agendar-box-modal-box');
    var agendarModalFundo = document.querySelector('.agendar-box-modal-fundo-escuro');

    agendarModal.style.visibility = 'visible';
    agendarModal.style.opacity = '1';

    agendarModalFundo.style.visibility = 'visible';
    agendarModalFundo.style.opacity = '1';
}

function desaparecerAgendarModal() {
    var agendarModal = document.querySelector('.agendar-box-modal-box');
    var agendarModalFundo = document.querySelector('.agendar-box-modal-fundo-escuro');


    agendarModal.style.visibility = 'hidden';
    agendarModal.style.opacity = '0';

    agendarModalFundo.style.visibility = 'hidden';
    agendarModalFundo.style.opacity = '0';

}