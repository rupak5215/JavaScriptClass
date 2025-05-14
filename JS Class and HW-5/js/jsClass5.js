let employee = {
    name : "Younus",
    age : 84,
    isCheifAdvisor: true,
    address :{
        street : 'Colleg Road',
        area : 'Chawkbazar',
        city : 'Chittagong'
    },

    responsibility: function(rank){
        console.log(`${this.name} is acting as ${rank}`);
    },

    duties: ['Administration', 'Law Maker', 'Jdicial'],
}
employee.responsibility('Cheif Advisor');


// console.log(employee);
// console.log(employee.name);
console.log(employee["age"]);
console.log(employee.address);
console.log(employee.address['city']);


console.log(employee.duties[1]);