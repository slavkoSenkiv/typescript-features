const carMakers = ['ford', 'toyota', 'chevy'];
const phoneMakers: string[] = [];
const dates = [new Date(), new Date()];
const carByMaker = [
    ['f150'],
    ['corolla'],
    ['camaro']
];
const emptyNesterArr: string[][] = [];

//help with inference when extracting values
const car = carMakers[0];
const models = carByMaker[0];
const model = carByMaker[0][0];
const myCar = carByMaker.pop();

//prevent incompatible values
//carMakers.push(100);

//help with map, forEach etc
carMakers.map((car: string): string =>{
    return car.toUpperCase();
});

//flexible types
//inference two types if arr has some default values when is initialised
const importantDates = [new Date(), '2010-10-10'];

//annotate types if initialised arr is empty
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('2010-10-10');
importantDates2.push(new Date());
//get error cuz number is not defined as arr type
//importantDates2.push(100); 



