export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    next() {
    if (departmentIndex >= departments.length) {
      return { done: true };
    }

    const department = departments[departmentIndex];
    const employees = report.allEmployees[department];
    const employee = employees[employeeIndex];

    if (employeeIndex >= employees.length) {
      departmentIndex++;
      employeeIndex = 0;
      return this.next();
    }

    employeeIndex++;
      return { value: employee, done: false };
    },
  };
}
