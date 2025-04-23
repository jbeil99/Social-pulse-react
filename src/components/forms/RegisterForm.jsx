import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [form, setForm] = useState({ email: "", password: "", re_password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8002/auth/users/", form);
      alert("Registration successful! Check your email for activation.");
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="password" name="re_password" placeholder="Confirm Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}
