import { useState } from "react";
import { signupUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function InputField({
  id,
  name,
  label,
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>
        {label}
      </label>

      <div className="relative">

        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
          {icon}
        </span>

        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="w-full h-12 rounded-xl bg-[#192833] border border-[#325167] pl-12 pr-4 text-white"
        />

      </div>
    </div>
  );
}


export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
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
      const res = await signupUser(form);

      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(
        new Event("authChanged")
      );
      
      alert("Signup successful!");
      navigate("/")
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Signup failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <InputField
        id="name"
        name="name"
        label="Full Name"
        icon="person"
        placeholder="Enter your full name"
        value={form.name}
        onChange={handleChange}
      />

      <InputField
        id="email"
        name="email"
        label="Email Address"
        icon="mail"
        placeholder="name@example.com"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      {/* PASSWORD */}
      <div className="flex flex-col gap-2">

        <label className="text-sm font-medium ml-1">
          Password
        </label>

        <div className="relative">

          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#92b2c9]">
            lock
          </span>

          <input
            name="password"
            type={
              showPassword ? "text" : "password"
            }
            placeholder="Create a strong password"
            value={form.password}
            onChange={handleChange}
            className="w-full h-12 rounded-xl bg-[#192833] border border-[#325167] pl-12 pr-12 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((p) => !p)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            👁
          </button>

        </div>
      </div>

      <button
        type="submit"
        className="mt-4 h-12 rounded-xl bg-primary font-bold"
      >
        Create Account
      </button>
    </form>
  );
}
