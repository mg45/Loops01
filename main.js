/********** lev1_1 *********
let i;
str = "Hello World";
for (i = 1; i <= 10; i++ ) {
    console.log(`${str + " " + i}`);
} */

/********** lev1_2 *********
let numArray = [];
let i;
for(i = 0; i <=10; i++) {
    numArray.push(i)
}
console.log(numArray); */

/********** lev1_4 *********
let names = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"];

let i;
for(i = 0; i < names.length; i++) {
    console.log(names[i]);
}*/

/********** lev1_6 *********
let retArray = [];
let i;
for(i = 1; i <= 100; i++) {
    retArray.push(`image_${[i]}.jpg`);
}
console.log(retArray); */

/********** lev1_7 *********
let i = 1;
do{
    console.log(`The number is ${i}`);
    i++;
}while(i <= 5);*/

/********** lev1_8 *********
let i = 1;
while (i < 20) {
    if (i % 2 === 0) {
        console.log('Gerade Zahl: ' + i);
    }
    i++;  
} */

/********** lev1_9 **********/
const inputLength = document.getElementById("input-length");
const result = document.getElementById("result");
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

let compareAndDisplay = () =>  {
    result.innerHTML = ``;
    words.forEach(word => {
        if (word.length == inputLength.value) {
            result.innerHTML += `<h1>${word}<h1/>`;
        }
    })
}
