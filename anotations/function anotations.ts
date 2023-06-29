//return inference example 
const add = (a: number, b: number) => {
    return a + b;
};

//manual annotation example
const substract = (a: number, b: number): number =>{
    return a - b;
};

//keyword function
function devide(a: number, b: number): number {
    return a / b;
}

//anonimous functions assigned to variables
const multiply = function(a: number, b: number): number {
    return a * b;
}


//where no return expected
const logger = (msg: string): void => {
    console.log(msg);    
}

// never for marking function is not reaching the end 
const throwErr = (msg: string): never => {
    throw new Error(msg);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}; 

/* const logWeather = (forecast: { date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);    
} */

//destructured function  
const logWeather = ({date, weather}: { date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);    
}

logWeather(todaysWeather);