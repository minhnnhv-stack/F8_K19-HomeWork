import { headers } from "./config.js";
import { appState } from "./state.js";
import { deleteCustomer } from "./api.js";

export const fillDataToForm = (data) => {
  headers.forEach((header) => {
    if (header.key !== "id") {
      const inputEl = document.getElementById(header.key);
      if (inputEl) {
        inputEl.value = data[header.key];
      }
    }
  });

  const btnAdd = document.querySelector("#btnAdd");
  const btnUpdate = document.querySelector("#btnUpdate");
  const btnCancel = document.querySelector("#btnCancel");

  if (btnAdd && btnUpdate && btnCancel) {
    btnAdd.disabled = true;
    btnAdd.classList.add("opacity-50", "cursor-not-allowed");
    btnUpdate.classList.remove("hidden");
    btnCancel.classList.remove("hidden");
  }
};

export const renderTable = (data) => {
  const divElement = document.createElement("div");
  divElement.classList.add("overflow-x-auto");

  const tableElement = document.createElement("table");
  tableElement.className =
    "min-w-full bg-white border border-gray-200 rounded-lg shadow-md";
  const theadElement = document.createElement("thead");
  theadElement.className =
    "bg-gray-100 border-b border-gray-200 text-left text-sm text-gray-600 uppercase tracking-wider";
  const tbodyElement = document.createElement("tbody");

  const headerRow = document.createElement("tr");
  headers.forEach((header) => {
    const thElement = document.createElement("th");
    thElement.classList.add("p-3", "border-r");
    thElement.textContent = header.text;
    headerRow.appendChild(thElement);
  });

  const actionThElement = document.createElement("th");
  actionThElement.classList.add("p-3", "text-center");
  actionThElement.textContent = "Action";
  headerRow.appendChild(actionThElement);

  data.forEach((row) => {
    const bodyRow = document.createElement("tr");
    bodyRow.className = "border-b border-gray-200 hover:bg-gray-50";

    headers.forEach((header) => {
      const tdElement = document.createElement("td");
      tdElement.className = "p-3";
      tdElement.innerText = row[header.key];
      bodyRow.appendChild(tdElement);
    });

    const actionTdElement = document.createElement("td");
    actionTdElement.className = "p-3 text-center flex gap-2 justify-center";

    // Nút Sửa
    const btnEdit = document.createElement("button");
    btnEdit.className =
      "bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600";
    btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"> </i>';
    btnEdit.addEventListener("click", () => {
      fillDataToForm(row);
      appState.currentEditId = row.id; // Lưu ID vào state chung
    });

    // Nút Xóa
    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = '<i class="fa-solid fa-trash"> </i>';
    btnDelete.className =
      "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600";
    btnDelete.addEventListener("click", async () => {
      if (
        confirm(`Bạn có chắc chắn muốn xóa khách hàng: ${row.companyName}?`)
      ) {
        await deleteCustomer(row.id);
        alert("Xóa thành công!");
        window.location.reload();
      }
    });

    actionTdElement.appendChild(btnEdit);
    actionTdElement.appendChild(btnDelete);
    bodyRow.appendChild(actionTdElement);
    tbodyElement.appendChild(bodyRow);
  });

  theadElement.appendChild(headerRow);
  tableElement.append(theadElement, tbodyElement);
  divElement.append(tableElement);

  return divElement;
};

export const formCustomer = () => {
  const divElement = document.createElement("div");
  divElement.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";

  headers.forEach((header) => {
    if (header.key !== "id") {
      const div = document.createElement("div");
      const labelEl = document.createElement("label");
      labelEl.className = "block text-sm font-medium text-gray-700";
      labelEl.htmlFor = header.key;
      labelEl.innerText = header.text;
      div.append(labelEl);

      const inputEl = document.createElement("input");
      inputEl.type = "text";
      inputEl.id = header.key;
      inputEl.className =
        "w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500 mb-4";
      div.append(inputEl);
      divElement.append(div);
    }
  });

  // Tạo khung chứa nút bấm
  const btnContainer = document.createElement("div");
  btnContainer.className = "col-span-full flex gap-2 mt-4";

  const btnAdd = document.createElement("button");
  btnAdd.id = "btnAdd";
  btnAdd.innerText = "Lưu Khách Hàng";
  btnAdd.className =
    "bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-all";

  const btnUpdate = document.createElement("button");
  btnUpdate.id = "btnUpdate";
  btnUpdate.innerText = "Cập nhật";
  btnUpdate.className =
    "bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 hidden";

  const btnCancel = document.createElement("button");
  btnCancel.id = "btnCancel";
  btnCancel.innerText = "Hủy";
  btnCancel.className =
    "bg-gray-400 text-white font-bold py-2 px-4 rounded hover:bg-gray-500 hidden";

  btnContainer.append(btnAdd, btnUpdate, btnCancel);
  divElement.append(btnContainer);

  return divElement;
};
