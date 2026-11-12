//filter
const words = ["pulvériser", "élite", "exubérant", "destruction", "présent"];
const result = words.filter((word) => word.length > 8);
console.log(result);


//map
// const number = [2,4,1,3,4];
// const resultat = number.map((x) => x*x)
// console.log(resultat);



// reduce
// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// console.log(sumWithInitial);

//includes
// const array2 = [1,4,56,32,21];
// console.log("Es ce que cet element existe ?",array2.includes(2));

//indexof
// const array3 = ["chien", "chat", "poule", "serpent", "grenouille"];
// console.log("l'index est:",array3.indexOf("chien"));

//at
// const array4 = [1,23,71,34,56];
// let index = -2;
// console.log("cet element est :",array4.at(index));

//concat
// const array5 = [1,2,3]
// const array6 = [4,5,6]
// console.log(array5.concat(array6))

//every
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array = [1, 30, 39, 29, 10, 13];
// console.log(array.every(isBelowThreshold));

//entries
// const array7 = ["a", "b", "c"];

// const iterator = array7.entries();
// console.log(iterator.next().value);

//find
// const array8 = [5, 12, 8, 130, 44];

// const found = array.find((element) => element > 10);
// console.log("l'element est",found);

//join
// const elements = ["Feu", "Air", "Eau"];

// console.log("la phrase est:",elements.join());


// console.log(elements.join(""));


// console.log(elements.join("-"));

//keys
// const array9 = ["a", "b", "c"];
// const iterator1 = array9.keys();
// console.log("les indices du tableau sont:")
// for (const key of iterator1) {
//   console.log(key);
// }

//push
// const animals = ["cochons", "chèvres", "moutons"];

// const count = animals.push("vaches");
// console.log(count);
// console.log(animals);

//pop
// const plants = ["brocoli", "chou-fleur", "chou", "chou frisé", "tomate"];
// console.log(plants.pop());
// console.log(plants);

//sort
// const months = ["Mars", "Jan", "Fev", "Dec"];
// months.sort();
// console.log("le tableau trier est:",months);

//isArray

// console.log(Array.isArray([1, 3, 5]));
// const array10 = [1,3,90,34,21]
// console.log("Es ce que cet element est un array?",Array.isArray(array10))

//from
//console.log(Array.from("Laure"));

//some
// const array11 = [1, 2, 3, 4, 5];


// const even = (element) => element % 2 === 0;

// console.log(array11.some(even));

//splice
// const months1 = ["Jan", "Mars", "Avril", "Juin"];
// months1.splice(1, 0, "Fév");

// console.log(months1);//modifie le contenu d'un tableau en supprimant ou remplacant et/ou en ajoutant un element dans le tableau

//slice
// const animals2 = ["ant", "bison", "camel", "duck", "elephant"];
// console.log("la portion du tabeau est:",animals2.slice(2));
// console.log("la portion du tabeau est:",animals2.slice(-2));