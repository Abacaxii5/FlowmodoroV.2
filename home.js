
//variáveis do timer

let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00"

//o display do timer

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active')
}

//pra iniciar o timer

function start() {
    //mudar botão

    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';


    //pra mudar o tempo
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //contagem
    let timerFunction = () => {
        //mudar o display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        //iniciar
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0 ) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++

                    // mudar o painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else {
                    //continuar com o work
                    workMinutes = workTime;
                    breakCount++
                    
                    //mudar o painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }

    }

    //iniciar contagem
    setInterval(timerFunction, 1000); 
}