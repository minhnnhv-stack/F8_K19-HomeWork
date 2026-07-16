import { randomUUID } from "crypto";

import { CustomerService } from "./services/CustomerService";
import { EmployeeService } from "./services/EmployeeService";
import { ProjectService } from "./services/ProjectService";

// Khởi tạo các service
console.log("=== KHỞI TẠO CÁC SERVICE ===");
const customerService = new CustomerService();
const employeeService = new EmployeeService();
const projectService = new ProjectService(employeeService);

//Test Case 1: Tạo Customer
console.log("\n--- Test Case 1: Tạo Customer ---");
const customer1 = customerService.create({
  name: "FPT Software",
  tax: "010123",
  address: "Hà Nội",
});
console.log("Created Customer:", customer1.toString());
console.log(`Has ID? ${!!customer1.id}`);

//Test Case 2: Cập nhật Customer
console.log("\n--- Test Case 2: Cập nhật Customer ---");
const updatedCustomer = customerService.updateById(customer1.id, {
  address: "TP. Hồ Chí Minh",
});
console.log(
  "Updated Customer Address:",
  updatedCustomer?.address === "TP. Hồ Chí Minh" ? "Thành công" : "Thất bại",
);

//Test Case 3 : Tạo Employee
console.log("\n--- Test Case 3: Tạo Employee ---");
const emp1 = employeeService.create({ name: "Nguyễn Văn A" });
const emp2 = employeeService.create({ name: "Trần Thị B" });
console.log(`Created Employee 1: ${emp1.name} (ID: ${emp1.id})`);
console.log(`Created Employee 2: ${emp2.name} (ID: ${emp2.id})`);
console.log(`Are IDs different? ${emp1.id !== emp2.id}`);

//Test Case 4: Tim Employee
console.log("\n--- Test Case 4: Tìm Employee ---");
const foundEmp = employeeService.findById(emp1.id);
console.log(
  "Found existing employee:",
  foundEmp?.name === emp1.name ? "Thành công" : "Thất bại",
);
const notFoundEmp = employeeService.findById("uuid-khong-ton-tai");
console.log(
  "Find non-existing employee:",
  notFoundEmp === null ? "Thành công" : "Thất bại",
);

//Test Case 5: Tạo Project
console.log("\n--- Test Case 5: Tạo Project ---");
const project1 = projectService.create({
  customerId: customer1.id,
  employeeId: emp1.id,
});
console.log("Project ID:", project1.id);

//Test Case 6: Đổi nhân viên phụ trách Project
console.log("\n--- Test Case 6: Đổi nhân viên phụ trách Project ---");
projectService.updateById(project1.id, { employeeId: emp2.id });

//Test Case 7: Cập nhật Project nhưng không đổi Employee
console.log("\n--- Test Case 7: Cập nhật Project nhưng không đổi Employee ---");
console.log("(Nếu không có notification nào in ra ở dưới là chính xác)");
projectService.updateById(project1.id, { customerId: "id-khach-hang-moi" });

//Test Case 8: Cập nhật dữ liệu không tồn tại
console.log("\n--- Test Case 8: Cập nhật dữ liệu không tồn tại ---");
const fakeId = randomUUID();
console.log(
  "Customer update fake:",
  customerService.updateById(fakeId, { name: "Fake" }) === null
    ? "null"
    : "Lỗi",
);
console.log(
  "Employee update fake:",
  employeeService.updateById(fakeId, { name: "Fake" }) === null
    ? "null"
    : "Lỗi",
);
console.log(
  "Project update fake:",
  projectService.updateById(fakeId, { customerId: "Fake" }) === null
    ? "null"
    : "Lỗi",
);

// /Test Case 9 : Tạo Project với employeeId không tồn tại"
console.log(
  "\n--- Test Case 9 (Khuyến khích): Tạo Project với employeeId không tồn tại ---",
);
const projectNoEmp = projectService.create({
  customerId: customer1.id,
  employeeId: "emp-id-fake",
});
console.log("Project created successfully without error:", !!projectNoEmp.id);
