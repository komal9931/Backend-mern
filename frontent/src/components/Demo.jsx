import React, { useState } from "react";

const Addform = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    city: "",
    gender: "",
    hobbies: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((hobby) => hobby !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <div className="container border w-50 p-4">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <p>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="Name..."
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email..."
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  type="number"
                  name="contact"
                  value={formData.contact}
                  placeholder="Contact..."
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password..."
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  list="demo"
                  placeholder="City..."
                  onChange={handleChange}
                />
                <datalist id="demo">
                  <option value="Delhi" />
                  <option value="Mumbai" />
                  <option value="Kolkata" />
                  <option value="Chennai" />
                  <option value="Bangalore" />
                </datalist>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="reading"
                  checked={formData.hobbies.includes("reading")}
                  onChange={handleChange}
                />
                &nbsp; Reading&nbsp;
                <input
                  type="checkbox"
                  value="travelling"
                  checked={formData.hobbies.includes("travelling")}
                  onChange={handleChange}
                />
                &nbsp; Travelling&nbsp;
                <input
                  type="checkbox"
                  value="painting"
                  checked={formData.hobbies.includes("painting")}
                  onChange={handleChange}
                />
                &nbsp; Painting&nbsp;
                <input
                  type="checkbox"
                  value="singing"
                  checked={formData.hobbies.includes("singing")}
                  onChange={handleChange}
                />
                &nbsp; Singing&nbsp;
              </p>
              <p>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                &nbsp; Male&nbsp;
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                &nbsp; Female&nbsp;
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  checked={formData.gender === "others"}
                  onChange={handleChange}
                />
                &nbsp; Others
              </p>
              <p>
                <input type="submit" value="Submit" />
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addform;
