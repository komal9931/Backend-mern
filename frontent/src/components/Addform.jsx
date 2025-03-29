import React, { useRef, useState } from "react";

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

  //   const [name, setName] = useState("");

  //   const name = useRef(null);
  //   const email = useRef(null);
  //   console.log(name);
  const handlechange = (e) => {
    // console.log(e.target.value);
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((preData) => ({
        ...preData,
        hobbies: checked
          ? [...preData.hobbies, value]
          : preData.hobbies.filter((hobby) => hobby !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("jdjsdf", formData);
    // console.log(name, email);

    // console.log(name.current.value, email.current.value);
  };

  return (
    <>
      <div className="container border w-50">
        <div className="row">
          <div className="col">
            <form action="" onSubmit={handleSubmit}>
              <p>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  id=""
                  placeholder="Name..."
                  //   ref={name}
                  //   onChange={(e) => setName(e.target.value)}
                  onChange={handlechange}
                />
              </p>
              <p>
                <input
                  //   ref={email}
                  type="email"
                  name="email"
                  id=""
                  placeholder="email..."
                  onChange={handlechange}
                />
              </p>
              <p>
                <input
                  type="number"
                  name="contact"
                  id=""
                  placeholder="Contact..."
                  onChange={handlechange}
                />
              </p>
              <p>
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="password..."
                  onChange={handlechange}
                />
              </p>
              <p>
                <input
                  type="text"
                  name="city"
                  id=""
                  list="demo"
                  placeholder="city..."
                  value={formData.city}
                  onChange={handlechange}
                  //   autoComplete="off"
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
                  name="reading"
                  onChange={handlechange}
                  id=""
                />{" "}
                &nbsp;Reading&nbsp;
                <input
                  type="checkbox"
                  value="travelling"
                  name="travelling"
                  onChange={handlechange}
                  id=""
                />
                &nbsp; Travelling&nbsp;
                <input
                  type="checkbox"
                  value="painting"
                  onChange={handlechange}
                  name="painting"
                  id=""
                />
                &nbsp; Painting&nbsp;
                <input
                  type="checkbox"
                  value="singing"
                  name="singing"
                  onChange={handlechange}
                  id=""
                />
                &nbsp; Singing&nbsp;
              </p>
              <p>
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  id=""
                  onChange={handlechange}
                />
                &nbsp; Male&nbsp;
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  id=""
                  onChange={handlechange}
                />
                &nbsp; Female&nbsp;
                <input
                  type="radio"
                  value="others"
                  name="gender"
                  id=""
                  onChange={handlechange}
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
