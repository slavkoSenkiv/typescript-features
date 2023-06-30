const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};
 
//manual anotation
const pepsi: [string, boolean, number] = ['brown', true, 40];

//anotation with alias
type Drink = [string, boolean, number];
const cola: Drink = ['brown', true, 40];


