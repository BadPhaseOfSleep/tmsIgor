function changeEl(){
    const mas = [];
    let i = 0;
    while(i < 10){
        const x = getRand(0, 100);
        if(mas.indexOf(x) == -1){
            mas.push(x);
            i++;
        }
    }
    str = mas.join(', ');
    let str1 = str.replace(/0/g, 'zero');
    const mas1 = str1.split(', ');
    console.log(mas1);
    
}

function getRand(min, max){
    return(Math.round(Math.random() * (max - min) + min));
}


changeEl();