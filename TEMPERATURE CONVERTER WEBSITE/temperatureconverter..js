let celcuisInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

/*celcius to Fahrenheit and Kelvin*/
celcuisInput.addEventListener('input',function(){
    let cTemp = parseFloat(celcuisInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})


/*Fahrenheit to Celcius and Kelvin*/
fahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celcuisInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

/*Kelvin to Celcius and Fahrenheit*/
kelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (5/9) + 32

    celcuisInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener('click', ()=>{
    celcuisInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})


