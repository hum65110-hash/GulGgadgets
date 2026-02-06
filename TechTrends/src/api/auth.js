import api from "./client";

export const signupUser = (data) =>
  api.post("/signup", data);

export const loginUser = (data) =>
  api.post("/login", data);
