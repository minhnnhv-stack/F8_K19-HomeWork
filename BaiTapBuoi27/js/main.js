import { headers } from "./config.js";
import { appState } from "./state.js";
import { getCustomers, addCustomer, updateCustomer } from "./api.js";
import { renderTable, formCustomer } from "./ui.js";

const handerUpdateAndCancel = () => {
  const btnCancel = document.querySelector("#btnCancel");
  if (!btnCancel) return;

  btnCancel.addEventListener("click", () => {
    const btnAdd = document.querySelector("#btnAdd");
    const btnUpdate = document.querySelector("#btnUpdate");

    headers.forEach((header) => {
      if (header.key !== "id") {
        const inputEl = document.getElementById(header.key);
        if (inputEl) inputEl.value = "";
      }
    });

    btnAdd.disabled = false;
    btnAdd.classList.remove("opacity-50", "cursor-not-allowed");
    btnUpdate.classList.add("hidden");
    btnCancel.classList.add("hidden");
    appState.currentEditId = null; // Xóa ID khi hủy
  });
};

const handerAddCustomer = () => {
  const btnAdd = document.querySelector("#btnAdd");
  if (!btnAdd) return;

  btnAdd.addEventListener("click", async () => {
    const newData = {};
    headers.forEach((header) => {
      if (header.key !== "id") {
        const inputEl = document.getElementById(header.key);
        if (inputEl) newData[header.key] = inputEl.value;
      }
    });

    await addCustomer(newData);
    alert("Thêm mới thành công!");
    window.location.reload();
  });
};

const handerUpdateCustomer = () => {
  const btnUpdate = document.querySelector("#btnUpdate");
  if (!btnUpdate) return;

  btnUpdate.addEventListener("click", async () => {
    if (!appState.currentEditId) {
      alert("Chưa có khách hàng nào được chọn!");
      return;
    }

    const newData = {};
    headers.forEach((header) => {
      if (header.key !== "id") {
        const inputEl = document.getElementById(header.key);
        if (inputEl) newData[header.key] = inputEl.value;
      }
    });

    await updateCustomer(appState.currentEditId, newData);
    alert("Cập nhật thành công!");
    window.location.reload();
  });
};

const init = async () => {
  // 1. In form ra trước
  const formContainer = document.querySelector("#formContainer");
  formContainer.innerHTML = "";
  formContainer.append(formCustomer());

  // 2. In bảng ra sau
  const data = await getCustomers();
  const tableContainer = document.querySelector("#tableContainer");
  tableContainer.innerHTML = "";
  tableContainer.append(renderTable(data));

  // 3. Kích hoạt toàn bộ sự kiện click
  handerAddCustomer();
  handerUpdateCustomer();
  handerUpdateAndCancel();
};

init();
