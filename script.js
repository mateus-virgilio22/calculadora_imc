let alt = document.getElementById("altura");
let peso = document.getElementById("peso");
let button = document.getElementById("botao");
let res = document.querySelector('.resultado');

const getText = (imc) => {
    if(imc > 40) return 'Obesidade grau III';
    if(imc > 35) return 'Obesidade grau II';
    if(imc > 30) return 'Obesidade grau I';
    if(imc > 25) return 'Levemente acima do peso';
    if(imc > 18.5) return 'Peso ideal';
    return 'Abaixo do peso'
};


const imcCalc = () => {
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    res.textContent = `Seu IMC é ${valorImc} - ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc)



