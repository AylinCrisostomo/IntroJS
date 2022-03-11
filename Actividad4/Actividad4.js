// multiplos de 5 desde el 1 hasta el número

var numeroWhile = Number(prompt("Ingresa un número"));
var num2 = 1
while(num2<=numeroWhile){
   if (num2%5==0){
    console.log(num2);
   }
   num2++
}



var numeroWhile = Number(prompt("Ingresa un número"));
var num2 = 1
do {
   if (num2%5==0){
    console.log(num2);
   }
   num2++
} while(num2<=numeroWhile)


// for numeros impares del 1 al 50
for (var index = 1; index <= 50; index++){
    if (index % 2 != 0){
        console.log(index)
    }
}
