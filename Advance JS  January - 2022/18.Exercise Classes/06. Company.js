class Company {
  constructor() {
    this.departments = [];
  }

  addEmployee(name, salary, position, department) {
    let arr = [name, salary, position, department];
    arr.some((element) => {
      if (
        element === '' ||
        element === undefined ||
        element === null ||
        Number(salary) < 0
      ) {
        throw new Error('Invalid input!');
      }
    });

    let newEployee = {
      name,
      salary,
      position,
    };

    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    this.departments[department].push(newEployee);
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestDep = '';
    let maxSalary = 0;

    for (const [key, value] of Object.entries(this.departments)) {
      let salary = 0;
      value.forEach((e) => {
        salary += e.salary;
      });
      salary = salary / value.length;
      if (salary > maxSalary) {
        bestDep = key;
        maxSalary = salary;
      }
    }
    if (bestDep) {
      let result = `Best Department is: ${bestDep}\nAverage salary: ${maxSalary.toFixed(
        2
      )}\n`;

      Object.values(this.departments[bestDep])
        .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
        .forEach((e) => {
          let current = `${e.name} ${e.salary} ${e.position}\n`;
          result += current;
        });
      return result.trim();
    }
  }

  isValid(property) {
    if (property !== null || property !== '' || property !== undefined) {
      return true;
    }
  }
}
let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
