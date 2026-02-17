import { useState } from "react";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(
        new Event("authChanged")
      );

      alert("Login successful!");
      navigate("/")
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Login failed"
      );
      navigate("/register")
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <input
        name="email"
        placeholder="john@example.com"
        value={form.email}
        onChange={handleChange}
        className="h-12 rounded-lg pl-4"
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={form.password}
        onChange={handleChange}
        className="h-12 rounded-lg pl-4"
      />

      <button
        type="submit"
        className="h-12 rounded-lg text-white bg-primary font-bold"
      >
        Log In
      </button>
    </form>
  );
}
