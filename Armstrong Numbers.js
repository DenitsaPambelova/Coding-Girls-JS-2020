function Armstrong(){
    let armstrongs=[];
    for (let i = 1; i <=9; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                let cube=i**3+j**3+k**3;
                let number=100*i+10*j+k;
                if (cube===number){
                    armstrongs.push(number)
                }
            }

        }
    }
    console.log(armstrongs);

}
Armstrong()
