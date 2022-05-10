const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () =>{
    if (altura.value !== '' && peso.value !== ''){
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification =''

        if(imc<18.5){
            classification =' bajo peso'
        }else if (imc<25){
            classification = 'Peso normal' 
        }else if (imc < 30){
            classification = 'sobre peso'
        }else if(imc<35){
            classification =' Obesidad grado I'
        }else if(imc<41){
            classification =' Obesidad grado II'
        }else {
            classification =' Obesidad grado III'
        }
        

        resultado.innerHTML = `IMC: ${imc} (${classification})`
    }else{
        resultado.innerHTML = 'Rellena los campos'
    }
}