const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

//no interface - the argument type is defined when function is defined
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`name ${vehicle.name}`);
    console.log(`year ${vehicle.year}`);
    console.log(`broken? ${vehicle.broken}`);
};
printVehicle(oldCivic);

//with interface
interface Vehicle {
    name: string; 
    year: number; 
    broken: boolean;
}

const printVehicle1 = (vehicle: Vehicle): void => {
    console.log(`name ${vehicle.name}`);
    console.log(`year ${vehicle.year}`);
    console.log(`broken? ${vehicle.broken}`);
};
printVehicle1(oldCivic);


