// utils/storage.js

export const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const saveStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
