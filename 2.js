function doRandMass(){
    const mas = [];
    let i = 0;
    while(i < 7){
        const x = Math.round(Math.random() * (10 - 0) + 0);
        if(mas.indexOf(x) == -1){
            mas.push(x);
            i++;
        }
    }
    console.log(mas);
    console.log(mas.sort((a,b) => a-b));
}

doRandMass();