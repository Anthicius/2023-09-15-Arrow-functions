let arrowFunction = () => {
  let mass = [
    4,
    5,
    -5556,
    155,
    640,
    "15x",
    6789,
    -5564,
    478,
    654,
    "obuolys",
    789,
    -51,
    55,
    -222,
    0,
    -357,
    -56,
    "trylika",
    444,
    7778,
    4154,
    4751,
  ];

  let newArray = [];

  let mass4_1 = [];
  let mass4_2 = [];
  let mass4_3 = [];
  let mass4_4= [];
  let mass4_5 = [];
let mass4_6 = [];
let mass4_7 = [];
let mass4_8 = [];
let mass4_9 = [];
let mass4_10 = [];
let mass4_11 = [];
let mass4_12 = [];
let mass4_13 = [];
let mass4_14 = [];
let mass4_15 = [];



  mass.forEach((value, index) => {
    if (typeof value === "number") {
        mass4_1.push(value);
        mass4_3.push(value**4)
        mass4_4.push(value+55);
        mass4_5.push(value/2);
        mass4_6.push(`Number: ${value}`);
        mass4_7.push(`Number: ${index} is ${value}`);
        mass4_8.push(value * index);
        if(index >0) {
            mass4_9.push(value * mass[index - 1]); 
        }
        if(value*5 > 350){
            mass4_10.push(value)
        }
    }
    if (typeof value === "string") {
        mass4_2.push(value);
        if(value.length > 5){
            mass4_11.push(`${value} has ${value.length} symbols`)
        }
        mass4_12.push(value.split('').join('-').toUpperCase())
        if(value.length> 3){
            mass4_13.push(value.split('').map((char, index) => (index === 0 || index === 2) ? '-' : char).join(''));
        }
        mass4_14.push(value.split('').reverse().join(''));
        mass4_15.push(`Word ${value} is between ${mass[index-1]} and ${mass[index-2]}`)
    }
  });
  newArray.push(
    mass4_1,
    mass4_2,
    mass4_3,
    mass4_4,
    mass4_5,
    mass4_6,
    mass4_7,
    mass4_8,
    mass4_9,
    mass4_10,
    mass4_11,
    mass4_12,
    mass4_13,
    mass4_14,
    mass4_15
  );
  
  console.log(newArray)

  // 4.2. Tik tekstą (string tipo duomenis).
  // 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
  // 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
  // 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
  // 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
  // 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
  //   "Index: 0, Number: 2"
  //   "Index: 1, Number: 3"
  //   "Index: 2, Number: 5"
  //   Ir t.t.
  // 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
  // 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
  //   - Pirmo skaičiaus dauginti nereikia.
  //   - Antrą skaičių dauginti iš pirmo.
  //   - Trečią skaičių dauginti iš antro.
  //   - Ketvirta skaičių dauginti iš trečio.
  //   - Penktą skaičių dauginti iš ketvirto.
  //   Ir t.t.
  // 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
  // 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
  // 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
  // 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
  // 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
  // 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
};

arrowFunction();
