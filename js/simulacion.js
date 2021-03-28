function simulacion(){
    total = document.getElementById("totalGalletas").value;
    chocolate = document.getElementById("totalGalletasChoc").value;
    otras = total - chocolate;
    veces = 100000;
    if(otras<0){
        Swal.fire({
            icon: 'error',
            title: 'Ingresa bien los datos'  
        })
        return;
    }
    let cookies = [];
    var i;
    for(i = 0; i<total; i++){
        if(i<chocolate) cookies.push('C');
        else cookies.push('O');
    }
    var veces2choc = 0;
    var veceschocotro = 0;
    var veces2otro = 0;
    var results = [];
    console.log(cookies);
    for(i=0; i<veces; i++){
        var tempCook = cookies.map((x) => x);
        var sacados = [];
        var rand1 = Math.floor(Math.random() * (tempCook.length));
        sacados.push(tempCook[rand1]);
        tempCook.splice(rand1, 1);
        var rand2 = Math.floor(Math.random() * (tempCook.length));
        sacados.push(tempCook[rand2]);
        //console.log(rand1 + " , " + rand2 + " , " + tempCook.length);
        results.push(sacados);
    }

    results.forEach(element => {
        if(element[0]=='C' && element[1]=='C') veces2choc++;
        if(element[0]=='C' && element[1]=='O') veceschocotro++;
        if(element[0]=='O' && element[1]=='O') veces2otro++;
    });

    console.log("Probabilidad 1: " + veces2choc/veces);
    console.log("Probabilidad 2: " + veceschocotro/veces);
    console.log("Probabilidad 3: " + veces2otro/veces);
}