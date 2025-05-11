// // Problem - 1
// // Find the area of ​​a triangle where the values ​​of the base and height is given.
// function Triangle_area(base, height){
//     T_area = (base *  height)/2;
//     document.writeln(`If the base of a Triangle is ${base} and height is ${height} than the area of that triangle is ${T_area}`)
// }
// let b = prompt('Enter the mesurement of Base');
// let h = prompt('Enter the mesurement of Height');

// Triangle_area(b, h);

// Problem - 2
// Create a function that can calcul income tax of an Employee. 
//----Condition of income tax
// if the annual salary <= 350000; he do not pay any income tax;
// if the annual salary <= 500000; he have to pay 5% income tax; 
// if the annual salary <= 1000000; he have to pay 7.5% income tax; 
// if the annual salary > 1000000; he have to pay 10% income tax; 
function income_tax(salary, tax_rate){
    yearly_salary = salary * 12;
    annual_income_tax = yearly_salary * tax_rate;

    document.writeln(`Yearly Salary of the Employee is ${yearly_salary} and according to Govt. rules, this is a taxable income and he have to pay ${tax_rate*100}% tax from his annual income`);
    document.writeln('<br>')
    document.writeln(`<b>Finally, The Employee have to pay ${annual_income_tax} annually as income tax.</b>`); 
    }

    let Monthly_Salary = prompt('Enter Monthly Salary');
    let yearly_income = Monthly_Salary * 12;
    let tax_r;

    if (yearly_income<= 350000){
            tax_r = 0.00;
        } else if (yearly_income<= 500000){
            tax_r = 0.05;
        } else if (yearly_income<= 1000000){
            tax_r = 0.075;
        } else {
            tax_r = 0.10;
        }
    income_tax(Monthly_Salary, tax_r);
