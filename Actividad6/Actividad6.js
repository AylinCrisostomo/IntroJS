//1. Concatena
var animals = ["eagle","parrot","monkey","boar","lion"]
var comingSoonAnimals = ["panter","dragon","turtle"]

var Zoo = animals.concat(comingSoonAnimals);
console.log(Zoo)

//2. Ordena
var arr = [4,6,1,0,8,2]
console.log(arr.sort(function(a, b){return a-b}))

//3. Agrega cow a animals
animals.push("cow");
console.log(animals)

//4. Retira eagle de animals
animals.shift();
console.log(animals)