import { randomUUID } from "crypto";
import { type IProject, Project } from "../models/Project";
import { EmployeeService } from "./EmployeeService";

export class ProjectService {
  private projects: Project[] = [];

  // Dependency Injection: Nhận EmployeeService thông qua constructor
  constructor(private employeeService: EmployeeService) {}

  create(projectData: Omit<IProject, "id">): Project {
    const newProject = new Project(
      randomUUID(),
      projectData.customerId,
      projectData.employeeId,
    );
    this.projects.push(newProject);

    // Gửi thông báo nếu tìm thấy nhân viên
    const employee = this.employeeService.findById(newProject.employeeId);
    if (employee) {
      employee.receiveNoti("Bạn vừa được gán vào dự án mới.");
    }

    return newProject;
  }

  updateById(id: string, data: Partial<IProject>): Project | null {
    const project = this.projects.find((p) => p.id === id);
    if (!project) return null;

    const oldEmployeeId = project.employeeId;

    // Cập nhật thông tin Project
    if (data.customerId !== undefined) project.customerId = data.customerId;
    if (data.employeeId !== undefined) project.employeeId = data.employeeId;

    // Nếu có sự thay đổi employeeId thì mới gửi thông báo cho nhân viên mới
    if (data.employeeId && data.employeeId !== oldEmployeeId) {
      const newEmployee = this.employeeService.findById(data.employeeId);
      if (newEmployee) {
        newEmployee.receiveNoti("Bạn đã được chuyển giao phụ trách dự án này.");
      }
    }

    return project;
  }
}
