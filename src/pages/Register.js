import React, { useState } from "react";
import axios from "axios";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/signup",
        formData,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setFormData(res.data);
    } catch (err) {
      console.error("Error", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <br></br>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br></br>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
