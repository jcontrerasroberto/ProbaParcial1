let pregUno;
let pregDos;
let pregTres;
//let bandera=0;

function solucionar(){
    total = document.getElementById("totalGalletas").value;
    chocolate = document.getElementById("totalGalletasChoc").value;
    otras = total - chocolate;
    if(otras<0){
        Swal.fire({
            icon: 'error',
            title: 'Ingresa bien los datos'  
        })
        bandera=1;
    }
    else{

        console.log("Datos correctos: " + total + " " + chocolate + " " + otras);

        pregUno = ( factorial(chocolate) / ( factorial(chocolate-2) * factorial(2) ) ) / ( factorial(total) / ( factorial(total-2) * factorial(2) ) )
        

        if(chocolate==0){
            pregUno=0;
        }
    
        console.log(pregUno);
        
        pregDos = (chocolate / total) * (otras / (total-1));
        console.log(pregDos);
    
        pregTres = ( factorial(otras) / ( factorial(otras-2) * factorial(2) ) )  / ( factorial(total) / ( factorial(total-2) * factorial(2) ) );
        

        if(otras==0){
            pregTres=0;
        }

        console.log(pregTres);
    }

}

const factorial = (num) =>{
    let fac=1;
    for(i=1; i<=num; i++)
        fac = fac * i;

    return fac
}

function simulacion(){

    solucionar();

    total = document.getElementById("totalGalletas").value;
    chocolate = document.getElementById("totalGalletasChoc").value;
    otras = total - chocolate;
    veces = document.getElementById("totalVeces").value;
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


    const graph = document.querySelector(".grapScript");
    graph.innerHTML = "";
    graph.innerHTML = `
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Pregunta', 'Probabilidad calculada', 'Probabilidad frecuentista (simulada)'],
            ['a)', ${100*pregUno}, ${veces2choc*100/veces}],
            ['b)', ${100*pregDos}, ${veceschocotro*100/veces}],
            ['c)', ${100*pregTres}, ${veces2otro*100/veces}],
            ]);

            var options = {
            chart: {
                title: 'Gráfica de las probabilidades',
            }
            };

            var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    `;

}