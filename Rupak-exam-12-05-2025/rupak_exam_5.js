function income(salary){
     
    
    if (salary>=85000){
            tax_rate = 0.075;
    } else if (salary>=55000){
        tax_rate = 0.05;
    } else if (salary>=35000){
        tax_rate = 0.03;
    } else {
        tax_rate = 0.00;
    }
    income_tax = salary*tax_rate;
    document.writeln(income_tax);
}

yourSalary = prompt('Write your monthly salary')

income (yourSalary);

