function solucionar(event){
    event.preventDefault();
    total = document.getElementById("totalGalletas").value;
    chocolate = document.getElementById("totalGalletasChoc").value;
    otras = total - chocolate;
    if(otras<0) console.log("Datos incorrectos");
    else console.log("Datos correctos" + total + " " + chocolate);
}

const formulario = document.getElementById("formsol");
formulario.addEventListener('submit', solucionar);