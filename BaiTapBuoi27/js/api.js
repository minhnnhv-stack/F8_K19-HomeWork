import { API_URL } from "./config.js";

export const getCustomers = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching customers:", error);
    return [];
  }
};

export const addCustomer = async (newData) => {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
  } catch (error) {
    console.error("Error adding customer:", error);
  }
};

export const updateCustomer = async (id, newData) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
  } catch (error) {
    console.error("Error changing customer:", error);
  }
};

export const deleteCustomer = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
};
