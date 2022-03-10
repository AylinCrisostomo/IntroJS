var numeroDiv = Number(prompt("Ingresa un número"));
if(numeroDiv%2==0){
    console.log(numeroDiv + " es divisible entre 2");}
else{
        console.log(numeroDiv + " no es divisible entre 2");
    }







    var numeroPar = Number(prompt("Ingresa un número"));
if(numeroPar%2==0){
    alert(numeroPar + " es un número par");}
else{
        alert(numeroPar + " no es un número par");
    }









    var numeroSorteo = Number(prompt("Ingresa un número"));
if(numeroSorteo===1000){
    console.log("Ganaste un premio");}
else{
        console.log("Lo sentimos, sigue participando");
    }







    var numeroUno = Number(prompt("Ingresa un número"));
    var numeroDos = Number(prompt("Ingresa otro número"));
    if(numeroUno<numeroDos){
        console.log(numeroUno + " es menor que " + numeroDos);}
    else{
            console.log(numeroDos + " es menor que " + numeroUno);
        }








    var numeroUno = Number(prompt("Ingresa un número"));
    var numeroDos = Number(prompt("Ingresa otro número"));
    var numeroTres = Number(prompt("Ingresa un número más"));
    if(numeroDos>numeroUno && numeroDos>numeroTres){
            console.log(numeroDos + " es mayor que " + numeroUno + " y " + numeroTres);
            if(numeroUno === numeroDos){
                console.log(numeroUno+" es igual a "+numeroDos);}
                else if (numeroUno===numeroTres){
                    console.log(numeroUno+" es igual a "+numeroTres);}
                    else if (numeroDos===numeroTres){
                        console.log(numeroDos+" es igual a "+numeroTres);}
        }


        else if (numeroTres>numeroUno && numeroTres>numeroDos){
            console.log(numeroTres + " es mayor que " + numeroUno + " y " + numeroDos);
            if(numeroUno === numeroDos){
                console.log(numeroUno+" es igual a "+numeroDos);}
                else if (numeroUno===numeroTres){
                    console.log(numeroUno+" es igual a "+numeroTres);}
                    else if (numeroDos===numeroTres){
                        console.log(numeroDos+" es igual a "+numeroTres);}
        }
            
        else if     (numeroUno>numeroDos && numeroUno>numeroTres){
            console.log(numeroUno + " es mayor que " + numeroDos + " y " + numeroTres);
            if(numeroUno === numeroDos){
                console.log(numeroUno+" es igual a "+numeroDos);}
                else if (numeroUno===numeroTres){
                    console.log(numeroUno+" es igual a "+numeroTres);}
                    else if (numeroDos===numeroTres){
                        console.log(numeroDos+" es igual a "+numeroTres);}
        }      

    else{
            console.log("Hay dos números iguales");
            if(numeroUno === numeroDos){
                console.log(numeroUno+" es igual a "+numeroDos+". El número menor es "+ numeroTres);}
                else if (numeroUno===numeroTres){
                    console.log(numeroUno+" es igual a "+numeroTres+ ". El número menor es "+ numeroDos);}
                    else if (numeroDos===numeroTres){
                        console.log(numeroDos+" es igual a "+numeroTres+ ". El número menor es "+ numeroUno);}
        }

    