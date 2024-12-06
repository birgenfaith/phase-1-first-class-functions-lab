// Code your solution in this file!
const theDrivers = (['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnFirstTwoDrivers = function(){
       return theDrivers.slice(0,2);

}
returnFirstTwoDrivers();

const returnLastTwoDrivers = function(){
        return theDrivers.slice(2,4);
}
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num1) => (integer) =>{
        return num1 * integer;
}

const fareDoubler =createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(theDrivers, selectDrivers){
        return selectDrivers(theDrivers)
};