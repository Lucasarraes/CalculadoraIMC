const Calcular = document.querySelector('.Calcular');
const Resultado = document.querySelector('.Resultado');

function IMC(){
const Nome = document.querySelector('.Nome').value;
const Peso = document.querySelector('.Peso').value;
const Altura = document.querySelector('.Altura').value;


    if (Nome == '' || Peso === '' || Altura === '') {
        alert('Preencha todos os campos.');

    }else{
        const valorImc = (Peso / (Altura * Altura)).toFixed(1);

        if(valorImc < 18.5) {
            Resultado.textContent = `Olá ${Nome} seu IMC é ${valorImc}, considerado magreza.`;
        }else if( valorImc > 18.5 && valorImc < 24.9){
            Resultado.textContent = `Olá ${Nome} seu IMC é ${valorImc}, considerado normal.`;
        }else if( valorImc > 25 && valorImc < 29.9){
            Resultado.textContent = `Olá ${Nome} seu IMC é ${valorImc}, considerado sobrepeso.`;
        }else if( valorImc > 30 && valorImc < 39.9){
            Resultado.textContent = `Olá ${Nome} seu IMC é ${valorImc}, considerado obesidade.`;
        }else if( valorImc > 40.9){
            Resultado.textContent = `Olá ${Nome} seu IMC é ${valorImc}, considerado obesidade grave.`;
        }

    }
}

Calcular.addEventListener('click',IMC);