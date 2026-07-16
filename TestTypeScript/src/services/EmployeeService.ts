import { randomUUID } from "crypto";
import { type IEmployee, Employee } from "../models/Employee";

export class EmployeeService {
  private employees: Employee[] = [];

  create(employee: Omit<IEmployee, "id" | "receiveNoti">): Employee {
    const newEmployee = new Employee(randomUUID(), employee.name);
    this.employees.push(newEmployee);
    return newEmployee;
  }

  findById(id: string): Employee | null {
    return this.employees.find((e) => e.id === id) || null;
  }

  updateById(id: string, data: Partial<IEmployee>): Employee | null {
    const employee = this.findById(id);
    if (!employee) return null;

    if (data.name !== undefined) employee.name = data.name;

    return employee;
  }
}
