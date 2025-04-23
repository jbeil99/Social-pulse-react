import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://127.0.0.1:8002/auth/jwt/create/", form);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      alert("Logged in successfully!");
    } catch {
      alert("Invalid credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}
