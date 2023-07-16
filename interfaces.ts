//no interface - the argument type is defined when function is defined
/* const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`name ${vehicle.name}`);
    console.log(`year ${vehicle.year}`);
    console.log(`broken? ${vehicle.broken}`);
};
printVehicle(oldCivic); */

//with interface
/* interface Vehicle {
    name: string; 
    year: Date; 
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return  `
        summary for the car 
        Name: ${this.name}
        Year: ${this.year}
        Is broken? ${this.broken}
        `;
    }
};

const printVehicle1 = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};
printVehicle1(oldCivic); */

//redone 
interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return  `summary for the car Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: 'true',
    sugar: 40,
    summary(): string {
        return `my drink has ${this.sugar} yyysugar`
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

